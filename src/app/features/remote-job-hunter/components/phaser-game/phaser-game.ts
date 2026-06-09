import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  viewChild,
} from '@angular/core';
import Phaser from 'phaser';

import { OFFICE_CONTENT } from '@core/constants/content/office-content.constants';
import { LanguageService } from '@core/services/language';
import { GameStateService } from '@features/remote-job-hunter/services/game-state.service';
import { createRemoteJobHunterGameConfig } from '@features/remote-job-hunter/phaser/config/remote-job-hunter-game.config';

@Component({
  selector: 'app-phaser-game',
  imports: [],
  templateUrl: './phaser-game.html',
  styleUrl: './phaser-game.scss',
})
export class PhaserGame implements OnDestroy {
  private readonly languageService = inject(LanguageService);
  private readonly gameContainer = viewChild.required<ElementRef<HTMLDivElement>>('gameContainer');
  private readonly gameStateService = inject(GameStateService);

  readonly content = computed(() => OFFICE_CONTENT[this.languageService.language()]);

  private game?: Phaser.Game;

  constructor() {
    afterNextRender(() => {
      this.game = new Phaser.Game(
        createRemoteJobHunterGameConfig(this.gameContainer().nativeElement, this.gameStateService),
      );
    });
  }

  ngOnDestroy(): void {
    this.game?.destroy(true);
  }
}
