import { AboutContent } from '@core/models/about.model';

export const ABOUT_CONTENT: Record<'en' | 'ru', AboutContent> = {
  en: {
    label: 'About',
    title: 'Frontend developer focused on scalable Angular applications',
    intro: [
      'I am a Senior Angular Frontend Developer with 6+ years of experience building complex web applications across fintech, CRM, B2B SaaS and e-commerce domains.',
      'My work is focused on Angular, TypeScript, RxJS, Signals, scalable frontend architecture, reusable UI components and performance optimization for data-heavy interfaces.',
      'I enjoy working with complex business logic, admin panels, dashboards, filters, reactive forms and clean UI architecture. I also participate in code reviews, technical discussions and frontend practice improvements.',
    ],
    focusTitle: 'Core focus',
    focusItems: [
      'Angular 17–21',
      'TypeScript and RxJS',
      'Signals and reactive state',
      'Complex forms and filters',
      'UI architecture and reusable components',
      'GraphQL and REST API integrations',
      'Performance optimization',
      'Code review and frontend best practices',
    ],
    highlightsTitle: 'What I bring',
    highlights: [
      {
        title: 'Enterprise UI experience',
        description:
          'I have worked with admin panels, dashboards, data-heavy tables, forms, filters and workflows where maintainability and performance matter.',
      },
      {
        title: 'Modern Angular mindset',
        description:
          'I use modern Angular features such as Signals, standalone components and reactive patterns while keeping architecture clear and practical.',
      },
      {
        title: 'Ownership',
        description:
          'I can take a feature from requirements to production: clarify behavior, build UI, integrate APIs, fix edge cases and polish user experience.',
      },
    ],
  },

  ru: {
    label: 'Обо мне',
    title: 'Frontend-разработчик с фокусом на масштабируемые Angular-приложения',
    intro: [
      'Я Senior Angular Frontend Developer с 6+ годами опыта разработки сложных web-приложений в fintech, CRM, B2B SaaS и e-commerce доменах.',
      'Мой основной фокус — Angular, TypeScript, RxJS, Signals, масштабируемая frontend-архитектура, переиспользуемые UI-компоненты и оптимизация производительности интерфейсов с большим количеством данных.',
      'Мне нравится работать со сложной бизнес-логикой, admin panels, dashboards, фильтрами, reactive forms и чистой UI-архитектурой. Также участвую в code review, технических обсуждениях и развитии frontend-практик команды.',
    ],
    focusTitle: 'Основной фокус',
    focusItems: [
      'Angular 17–21',
      'TypeScript и RxJS',
      'Signals и reactive state',
      'Сложные формы и фильтры',
      'UI-архитектура и переиспользуемые компоненты',
      'GraphQL и REST API интеграции',
      'Оптимизация производительности',
      'Code review и frontend best practices',
    ],
    highlightsTitle: 'Что я привношу в проект',
    highlights: [
      {
        title: 'Опыт enterprise UI',
        description:
          'Я работала с admin panels, dashboards, таблицами с большим объёмом данных, формами, фильтрами и workflow, где важны поддерживаемость и производительность.',
      },
      {
        title: 'Современный Angular-подход',
        description:
          'Использую современные возможности Angular: Signals, standalone components и reactive patterns, сохраняя архитектуру понятной и практичной.',
      },
      {
        title: 'Ownership',
        description:
          'Могу довести функционал от требований до релиза: уточнить поведение, реализовать UI, интегрировать API, обработать edge cases и улучшить UX.',
      },
    ],
  },
};
