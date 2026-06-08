import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';

import { GAME_LAB_CONTENT } from '@core/constants/content/game-lab-content.constants';
import { GameLabTab } from '@core/models/game-lab.model';
import { LanguageService } from '@core/services/language';
import { CareerProfile } from '@features/remote-job-hunter/components/career-profile/career-profile';
import { GamePanel } from '@features/remote-job-hunter/components/game-panel/game-panel';
import { JobBoard } from '@features/remote-job-hunter/components/job-board/job-board';
import { PhaserGame } from '@features/remote-job-hunter/components/phaser-game/phaser-game';

@Component({
  selector: 'app-game-lab-page',
  imports: [CommonModule, GamePanel, CareerProfile, PhaserGame, JobBoard],
  templateUrl: './game-lab-page.html',
  styleUrl: './game-lab-page.scss',
})
export class GameLabPage {
  private readonly languageService = inject(LanguageService);

  readonly content = computed(() => GAME_LAB_CONTENT[this.languageService.language()]);
  readonly activeTab = signal<GameLabTab>('play');

  readonly activeTabClasses = 'bg-cyan-400 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.22)]';
  readonly inactiveTabClasses =
    'border border-white/15 text-slate-300 hover:border-cyan-300 hover:text-cyan-200';

  setTab(tab: GameLabTab): void {
    this.activeTab.set(tab);
  }
}
