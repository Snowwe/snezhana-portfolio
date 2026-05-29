import { Component, computed, inject } from '@angular/core';
import { ABOUT_CONTENT } from '@core/constants/about-content.constants';
import { LanguageService } from '@core/services/language';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  private readonly languageService = inject(LanguageService);

  readonly content = computed(() => ABOUT_CONTENT[this.languageService.language()]);
}
