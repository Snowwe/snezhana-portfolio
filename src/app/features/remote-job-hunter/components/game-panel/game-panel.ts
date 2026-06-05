import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GAME_PANEL_CONTENT } from '@core/constants/content/game-panel-content.constants';
import { LanguageService } from '@core/services/language';

import { GameStateService } from '@features/remote-job-hunter/services/game-state.service';
import { AnalyticsService } from '@core/services/analytics';

@Component({
  selector: 'app-game-panel',
  imports: [CommonModule],
  templateUrl: './game-panel.html',
  styleUrl: './game-panel.scss',
})
export class GamePanel {
  private readonly gameStateService = inject(GameStateService);
  private readonly languageService = inject(LanguageService);
  private readonly analyticsService = inject(AnalyticsService);

  readonly player = this.gameStateService.player;
  readonly totalSkill = this.gameStateService.totalSkill;
  readonly log = this.gameStateService.log;

  readonly content = computed(() => GAME_PANEL_CONTENT[this.languageService.language()]);

  readonly enabledLearnButtonClasses =
    'border-white/15 text-slate-200 hover:border-cyan-300 hover:text-cyan-200 hover:shadow-[0_0_25px_rgba(34,211,238,0.14)]';
  readonly disabledLearnButtonClasses = 'border-red-400/40 text-red-300';

  learnAngular(): void {
    this.gameStateService.learnAngular();
    this.analyticsService.trackEvent('game_action', { action: 'learn_angular' });
  }

  learnTypescript(): void {
    this.gameStateService.learnTypescript();
    this.analyticsService.trackEvent('game_action', { action: 'learn_typescript' });
  }

  practiceRxjs(): void {
    this.gameStateService.practiceRxjs();
    this.analyticsService.trackEvent('game_action', { action: 'practice_rxjs' });
  }

  learnEnglish(): void {
    this.gameStateService.learnEnglish();
    this.analyticsService.trackEvent('game_action', { action: 'learn_english' });
  }

  rest(): void {
    this.gameStateService.rest();
    this.analyticsService.trackEvent('game_action', { action: 'rest' });
  }

  resetGame(): void {
    this.gameStateService.resetGame();
    this.analyticsService.trackEvent('game_reset');
  }

  canLearn(energyCost: number, motivationCost: number): boolean {
    const player = this.player();

    return player.energy >= energyCost && player.motivation >= motivationCost;
  }
}
