import { Injectable, signal } from '@angular/core';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly language = signal<Language>('en');

  setLanguage(language: Language): void {
    this.language.set(language);
  }

  toggleLanguage(): void {
    this.language.update((current) => (current === 'en' ? 'ru' : 'en'));
  }
}
