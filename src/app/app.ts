import { Component, computed, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LanguageService } from './core/services/language';
import { Language } from './core/models/language.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly languageService = inject(LanguageService);

  readonly language = this.languageService.language;

  readonly content = computed(() => {
    return this.language() === 'en'
      ? {
          label: 'Angular · TypeScript · Architecture',
          title: 'Snezhana Novitskaya',
          position: 'Senior Angular Frontend Developer',
          description:
            'I build complex, scalable frontend applications with Angular, TypeScript, RxJS, Signals and clean UI architecture. My focus is on maintainable interfaces, reactive data flows and thoughtful frontend architecture.',
          about: 'About',
          resume: 'Resume',
          gameLab: 'Game Lab',
          roadmap: 'Roadmap',
          languageLabel: 'RU',
        }
      : {
          label: 'Angular · TypeScript · Архитектура',
          title: 'Снежана Новицкая',
          position: 'Senior Angular Frontend Developer',
          description:
            'Я разрабатываю сложные и масштабируемые frontend-приложения на Angular, TypeScript, RxJS и Signals. Основной фокус — поддерживаемые интерфейсы, реактивные потоки данных и продуманная frontend-архитектура.',
          about: 'Обо мне',
          resume: 'Резюме',
          gameLab: 'Game Lab',
          roadmap: 'План',
          languageLabel: 'EN',
        };
  });

  setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}
