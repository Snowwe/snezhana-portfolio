import { AppContent } from '@core/models/app-content.model';

export const APP_CONTENT: Record<'en' | 'ru', AppContent> = {
  en: {
    label: 'Angular · TypeScript · Architecture',

    title: 'Snezhana Novitskaya',

    position: 'Senior Angular Frontend Developer',

    description:
      'I build complex, scalable frontend applications with Angular, TypeScript, RxJS, Signals and clean UI architecture. My focus is on maintainable interfaces, reactive data flows and thoughtful frontend architecture.',

    about: 'About',
    resume: 'Resume',
    gameLab: 'Game Lab',
    roadmap: 'Roadmap',
    infoItems: [
      {
        label: 'Experience',
        value: '6+ years',
      },
    ],
  },

  ru: {
    label: 'Angular · TypeScript · Архитектура',

    title: 'Снежана Новицкая',

    position: 'Senior Angular Frontend Developer',

    description:
      'Я разрабатываю сложные и масштабируемые веб-приложения на Angular, TypeScript, RxJS и Signals. Основной фокус — поддерживаемая архитектура, реактивные потоки данных и удобные пользовательские интерфейсы.',
    about: 'Обо мне',
    resume: 'Резюме',
    gameLab: 'Game Lab',
    roadmap: 'План',
    infoItems: [
      {
        label: 'Опыт',
        value: '6+ лет',
      },
    ],
  },
};
