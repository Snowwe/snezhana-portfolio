import { Component, computed, inject, signal } from '@angular/core';

import { LanguageService } from '@core/services/language';
import { RESUME_CONTENT } from '@core/constants/resume-content.constants';
import { AnalyticsService } from '@core/services/analytics';

@Component({
  selector: 'app-resume-page',
  imports: [],
  templateUrl: './resume-page.html',
  styleUrl: './resume-page.scss',
})
export class ResumePage {
  private readonly languageService = inject(LanguageService);
  private readonly analyticsService = inject(AnalyticsService);

  readonly openedExperienceId = signal<string | null>(null);

  readonly content = computed(() => RESUME_CONTENT[this.languageService.language()]);

  toggleExperience(id: string): void {
    this.openedExperienceId.update((currentId) => (currentId === id ? null : id));
  }

  isOpened(id: string): boolean {
    return this.openedExperienceId() === id;
  }

  trackCvDownload(): void {
    this.analyticsService.trackEvent('download_cv', {
      language: this.languageService.language(),
    });
  }
}
