import { computed, effect, Injectable, signal } from '@angular/core';

import { DEFAULT_PLAYER } from '@features/remote-job-hunter/constants/default-player.constants';
import { JOB_OFFERS } from '@features/remote-job-hunter/constants/job-offers.constants';
import { GameLogEntry } from '@features/remote-job-hunter/models/game-log-entry.model';
import { JobOffer } from '@features/remote-job-hunter/models/job-offer.model';
import { PlayerStats } from '@features/remote-job-hunter/models/player.model';
import { REMOTE_JOB_HUNTER_SCENE_COLORS } from '@features/remote-job-hunter/phaser/constants/remote-job-hunter-scene.constants';
import { OfficeActionType } from '@features/remote-job-hunter/phaser/models/office-zone.model';
import { GameActionResult } from '@core/models/game-action-result.model';

const STORAGE_KEY = 'remote-job-hunter-player';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  readonly player = signal(structuredClone(DEFAULT_PLAYER));

  readonly totalSkill = computed(() => {
    const player = this.player();

    return player.angular + player.typescript + player.rxjs + player.english;
  });
  readonly jobs = computed(() =>
    JOB_OFFERS.map((job) => ({
      ...job,
      available: this.canApply(job),
      accepted: this.hasAcceptedJob(job.id),
    })),
  );
  readonly log = signal<GameLogEntry[]>([
    {
      timestamp: new Date().toLocaleTimeString(),
      message: 'Game started',
    },
  ]);

  constructor() {
    this.loadPlayer();

    effect(() => {
      this.player();
      this.savePlayer();
    });
  }

  hasSkillForRequirement(
    skill: keyof Pick<PlayerStats, 'angular' | 'typescript' | 'rxjs' | 'english'>,
    value: number,
  ): boolean {
    return this.player()[skill] >= value;
  }

  learnAngular(): boolean {
    return this.learnSkill('angular', 5, 10, 2, 'Studied Angular (+5)');
  }

  learnTypescript(): boolean {
    return this.learnSkill('typescript', 5, 10, 2, 'Studied TypeScript (+5)');
  }

  practiceRxjs(): boolean {
    return this.learnSkill('rxjs', 4, 12, 3, 'Practiced RxJS (+4)');
  }

  learnEnglish(): boolean {
    return this.learnSkill('english', 3, 8, 1, 'Studied English (+3)');
  }

  rest(): void {
    this.player.update((player) => ({
      ...player,
      energy: Math.min(player.energy + 25, 100),
      motivation: Math.min(player.motivation + 10, 100),
    }));
    this.addLog('Rested and recovered energy');
  }

  resetGame(): void {
    localStorage.removeItem(STORAGE_KEY);

    this.player.set(structuredClone(DEFAULT_PLAYER));

    this.log.set([
      {
        timestamp: new Date().toLocaleTimeString(),
        message: 'Game reset',
      },
    ]);
  }

  applyForJob(job: JobOffer, interviewPassed: boolean): void {
    const currentJobId = this.player().currentJobId;

    if (currentJobId === job.id) {
      this.addLog(`Already working as ${job.position}`);
      return;
    }

    if (!this.canApply(job)) {
      this.addLog(`Application rejected: ${job.position} requirements are not met`);
      return;
    }

    if (!interviewPassed) {
      this.player.update((player) => ({
        ...player,
        motivation: Math.max(player.motivation - 8, 0),
      }));

      this.addLog(`Interview failed: ${job.position}`);
      return;
    }

    const hasAcceptedBefore = this.hasAcceptedJob(job.id);

    this.player.update((player) => ({
      ...player,
      level: hasAcceptedBefore ? player.level : player.level + 1,
      money: hasAcceptedBefore ? player.money : player.money + job.salary,
      motivation: Math.min(player.motivation + 10, 100),
      currentJob: job.position,
      currentJobId: job.id,
      acceptedJobIds: hasAcceptedBefore
        ? player.acceptedJobIds
        : [...player.acceptedJobIds, job.id],
    }));

    this.addLog(`Offer received: ${job.position} at ${job.company}`);
  }

  canApply(job: JobOffer): boolean {
    const player = this.player();

    return job.requirements.every((requirement) => player[requirement.skill] >= requirement.value);
  }

  hasAcceptedJob(jobId: string): boolean {
    return this.player().acceptedJobIds.includes(jobId);
  }

  runOfficeAction(actionType: OfficeActionType): GameActionResult {
    switch (actionType) {
      case 'study-angular':
        return this.runLearningAction(() => this.learnAngular(), '+5 Angular');

      case 'practice-typescript':
        return this.runLearningAction(() => this.learnTypescript(), '+5 TypeScript');

      case 'practice-rxjs':
        return this.runLearningAction(() => this.practiceRxjs(), '+4 RxJS');

      case 'practice-english':
        return this.runLearningAction(() => this.learnEnglish(), '+3 English');

      case 'coffee-break':
        this.rest();

        return {
          success: true,
          feedbackLabel: '+Energy',
          feedbackColor: REMOTE_JOB_HUNTER_SCENE_COLORS.amber,
        };

      default: {
        const exhaustiveCheck: never = actionType;
        return exhaustiveCheck;
      }
    }
  }

  private canSpendResources(energyCost: number, motivationCost: number): boolean {
    return this.player().energy >= energyCost && this.player().motivation >= motivationCost;
  }

  private learnSkill(
    skill: 'angular' | 'typescript' | 'rxjs' | 'english',
    skillValue: number,
    energyCost: number,
    motivationCost: number,
    message: string,
  ): boolean {
    if (!this.canSpendResources(energyCost, motivationCost)) {
      this.addLog('Not enough energy or motivation');
      return false;
    }

    this.player.update((player) => ({
      ...player,
      [skill]: player[skill] + skillValue,
      energy: player.energy - energyCost,
      motivation: player.motivation - motivationCost,
    }));

    this.addLog(message);

    return true;
  }

  private addLog(message: string): void {
    this.log.update((entries) =>
      [
        {
          timestamp: new Date().toLocaleTimeString(),
          message,
        },
        ...entries,
      ].slice(0, 5),
    );
  }

  private loadPlayer(): void {
    const rawPlayer = localStorage.getItem(STORAGE_KEY);

    if (!rawPlayer) {
      return;
    }

    try {
      this.player.set(JSON.parse(rawPlayer));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  private savePlayer(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.player()));
  }

  private runLearningAction(action: () => boolean, feedbackLabel: string): GameActionResult {
    const success = action();

    if (!success) {
      return {
        success: false,
        feedbackLabel: 'Need rest',
        feedbackColor: REMOTE_JOB_HUNTER_SCENE_COLORS.red,
      };
    }

    return {
      success: true,
      feedbackLabel,
      feedbackColor: REMOTE_JOB_HUNTER_SCENE_COLORS.cyan.hex,
    };
  }
}
