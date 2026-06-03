import { Component, computed, inject } from '@angular/core';

import { GAME_PANEL_CONTENT } from '@core/constants/content/game-panel-content.constants';
import { LanguageService } from '@core/services/language';

import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-game-panel',
  imports: [],
  templateUrl: './game-panel.html',
  styleUrl: './game-panel.scss',
})
export class GamePanel {
  private readonly gameStateService = inject(GameStateService);
  private readonly languageService = inject(LanguageService);

  readonly player = this.gameStateService.player;
  readonly totalSkill = this.gameStateService.totalSkill;
  readonly log = this.gameStateService.log;

  readonly content = computed(() => GAME_PANEL_CONTENT[this.languageService.language()]);

  learnAngular(): void {
    this.gameStateService.learnAngular();
  }

  learnTypescript(): void {
    this.gameStateService.learnTypescript();
  }

  practiceRxjs(): void {
    this.gameStateService.practiceRxjs();
  }

  learnEnglish(): void {
    this.gameStateService.learnEnglish();
  }

  rest(): void {
    this.gameStateService.rest();
  }

  resetGame(): void {
    this.gameStateService.resetGame();
  }
}
