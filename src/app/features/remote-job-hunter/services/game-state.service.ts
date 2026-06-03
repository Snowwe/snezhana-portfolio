import { Injectable, computed, signal } from '@angular/core';

import { DEFAULT_PLAYER } from '@features/remote-job-hunter/constants/default-player.constants';
import { JOB_OFFERS } from '@features/remote-job-hunter/constants/job-offers.constants';
import { GameLogEntry } from '@features/remote-job-hunter/models/game-log-entry.model';
import { JobOffer } from '@features/remote-job-hunter/models/job-offer.model';

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
    })),
  );

  private canApply(job: JobOffer): boolean {
    const player = this.player();

    return job.requirements.every((requirement) => player[requirement.skill] >= requirement.value);
  }
  readonly log = signal<GameLogEntry[]>([
    {
      timestamp: new Date().toLocaleTimeString(),
      message: 'Game started',
    },
  ]);

  learnAngular(): void {
    this.player.update((player) => ({
      ...player,
      angular: player.angular + 5,
      energy: Math.max(player.energy - 10, 0),
      motivation: Math.max(player.motivation - 2, 0),
    }));
    this.addLog('Studied Angular (+5)');
  }

  learnTypescript(): void {
    this.player.update((player) => ({
      ...player,
      typescript: player.typescript + 5,
      energy: Math.max(player.energy - 10, 0),
      motivation: Math.max(player.motivation - 2, 0),
    }));
    this.addLog('Studied TypeScript (+5)');
  }

  practiceRxjs(): void {
    this.player.update((player) => ({
      ...player,
      rxjs: player.rxjs + 4,
      energy: Math.max(player.energy - 12, 0),
      motivation: Math.max(player.motivation - 3, 0),
    }));
    this.addLog('Studied RxJS (+4)');
  }

  learnEnglish(): void {
    this.player.update((player) => ({
      ...player,
      english: player.english + 3,
      energy: Math.max(player.energy - 8, 0),
      motivation: Math.max(player.motivation - 1, 0),
    }));
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
