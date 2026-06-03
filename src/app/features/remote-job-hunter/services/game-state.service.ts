import { Injectable, computed, signal } from '@angular/core';

import { DEFAULT_PLAYER } from '../constants/default-player.constants';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  readonly player = signal(structuredClone(DEFAULT_PLAYER));

  readonly totalSkill = computed(() => {
    const player = this.player();

    return player.angular + player.typescript + player.rxjs + player.english;
  });

  learnAngular(): void {
    this.player.update((player) => ({
      ...player,
      angular: player.angular + 5,
      energy: Math.max(player.energy - 10, 0),
      motivation: Math.max(player.motivation - 2, 0),
    }));
  }

  learnTypescript(): void {
    this.player.update((player) => ({
      ...player,
      typescript: player.typescript + 5,
      energy: Math.max(player.energy - 10, 0),
      motivation: Math.max(player.motivation - 2, 0),
    }));
  }

  practiceRxjs(): void {
    this.player.update((player) => ({
      ...player,
      rxjs: player.rxjs + 4,
      energy: Math.max(player.energy - 12, 0),
      motivation: Math.max(player.motivation - 3, 0),
    }));
  }

  learnEnglish(): void {
    this.player.update((player) => ({
      ...player,
      english: player.english + 3,
      energy: Math.max(player.energy - 8, 0),
      motivation: Math.max(player.motivation - 1, 0),
    }));
  }

  rest(): void {
    this.player.update((player) => ({
      ...player,
      energy: Math.min(player.energy + 25, 100),
      motivation: Math.min(player.motivation + 10, 100),
    }));
  }
}
