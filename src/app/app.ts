import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { APP_CONTENT } from '@core/constants/app-content.constants';
import { Language } from '@core/models/language.model';
import { LanguageService } from '@core/services/language';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly languageService = inject(LanguageService);

  readonly language = this.languageService.language;

  readonly content = computed(() => APP_CONTENT[this.language()]);
  readonly showScrollTop = signal(false);

  setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop.set(window.scrollY > 400);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
