import { Injectable, computed, signal } from '@angular/core';

import { DEFAULT_PLAYER } from '@features/remote-job-hunter/constants/default-player.constants';
import { JOB_OFFERS } from '@features/remote-job-hunter/constants/job-offers.constants';
import { GameLogEntry } from '@features/remote-job-hunter/models/game-log-entry.model';
import { JobOffer } from '@features/remote-job-hunter/models/job-offer.model';
import { PlayerStats } from '@features/remote-job-hunter/models/player.model';

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
  hasSkillForRequirement(
    skill: keyof Pick<PlayerStats, 'angular' | 'typescript' | 'rxjs' | 'english'>,
    value: number,
  ): boolean {
    return this.player()[skill] >= value;
  }

  learnAngular(): void {
    this.learnSkill('angular', 5, 10, 2, 'Studied Angular (+5)');
    this.addLog('Studied Angular (+5)');
  }

  learnTypescript(): void {
    this.learnSkill('typescript', 5, 10, 2, 'Studied TypeScript (+5)');
    this.addLog('Studied TypeScript (+5)');
  }

  practiceRxjs(): void {
    this.learnSkill('rxjs', 4, 12, 3, 'Practiced RxJS (+4)');
    this.addLog('Studied RxJS (+4)');
  }

  learnEnglish(): void {
    this.learnSkill('english', 3, 8, 1, 'Studied English (+3)');
    this.addLog('Studied English (+3)');
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
    this.player.set(structuredClone(DEFAULT_PLAYER));
    this.log.set([
      {
        timestamp: new Date().toLocaleTimeString(),
        message: 'Game reset',
      },
    ]);
  }

  applyForJob(job: JobOffer): void {
    const currentJobId = this.player().currentJobId;

    if (currentJobId === job.id) {
      this.addLog(`Already working as ${job.position}`);
      return;
    }

    if (!this.canApply(job)) {
      this.addLog(`Application failed: ${job.position} requirements are not met`);
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

    this.addLog(`Current job changed: ${job.position} at ${job.company}`);
  }

  canApply(job: JobOffer): boolean {
    const player = this.player();

    return job.requirements.every((requirement) => player[requirement.skill] >= requirement.value);
  }

  hasAcceptedJob(jobId: string): boolean {
    return this.player().acceptedJobIds.includes(jobId);
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
  ): void {
    if (!this.canSpendResources(energyCost, motivationCost)) {
      this.addLog('Not enough energy or motivation');
      return;
    }

    this.player.update((player) => ({
      ...player,
      [skill]: player[skill] + skillValue,
      energy: player.energy - energyCost,
      motivation: player.motivation - motivationCost,
    }));

    this.addLog(message);
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
}
