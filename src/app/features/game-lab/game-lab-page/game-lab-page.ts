import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '@core/services/language';
import { GAME_LAB_CONTENT } from '@core/constants/content/game-lab-content.constants';

@Component({
  selector: 'app-game-lab-page',
  imports: [],
  templateUrl: './game-lab-page.html',
  styleUrl: './game-lab-page.scss',
})
export class GameLabPage {
  private readonly languageService = inject(LanguageService);

  readonly content = computed(() => GAME_LAB_CONTENT[this.languageService.language()]);
}
