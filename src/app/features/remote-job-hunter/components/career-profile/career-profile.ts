import { Component, computed, inject } from '@angular/core';

import { CAREER_PROFILE_CONTENT } from '@core/constants/content/career-profile-content.constants';
import { LanguageService } from '@core/services/language';
import { GameStateService } from '@features/remote-job-hunter/services/game-state.service';

@Component({
  selector: 'app-career-profile',
  imports: [],
  templateUrl: './career-profile.html',
  styleUrl: './career-profile.scss',
})
export class CareerProfile {
  private readonly gameStateService = inject(GameStateService);
  private readonly languageService = inject(LanguageService);

  readonly player = this.gameStateService.player;
  readonly totalSkill = this.gameStateService.totalSkill;
  readonly content = computed(() => CAREER_PROFILE_CONTENT[this.languageService.language()]);

  readonly acceptedOffersCount = computed(() => this.player().acceptedJobIds.length);
}
