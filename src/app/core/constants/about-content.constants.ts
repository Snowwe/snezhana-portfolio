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
    buildTitle: 'What I build',
    buildItems: [
      {
        title: 'Enterprise admin panels',
        description:
          'Complex dashboards, approval flows, filters, reporting pages and internal business tools.',
      },
      {
        title: 'E-commerce platforms',
        description:
          'Product management, order flows, pricing configuration, checkout-related interfaces and customer-facing UI.',
      },
      {
        title: 'Data-heavy interfaces',
        description:
          'Large tables, advanced filters, exports, reactive forms and UI performance optimization.',
      },
    ],
  },

  ru: {
    label: 'Обо мне',
    title: 'Frontend-разработчик с фокусом на масштабируемые Angular-приложения',
    intro: [
      'Я Senior Angular Frontend Developer с более чем 6-летним опытом разработки сложных веб-приложений для финтеха, CRM-систем, B2B SaaS и электронной коммерции.',
      'Мой основной стек — Angular, TypeScript, RxJS и Signals. Особое внимание уделяю архитектуре приложений, переиспользуемым компонентам и производительности пользовательских интерфейсов.',
      'Мне нравится работать со сложной бизнес-логикой, административными панелями, аналитическими интерфейсами, фильтрами и сложными формами. Также участвую в код-ревью, технических обсуждениях и развитии инженерных практик команды.',
    ],
    focusTitle: 'Основной фокус',
    focusItems: [
      'Angular 17–21',
      'TypeScript и RxJS',
      'Signals и реактивное управление состоянием',
      'Сложные формы и фильтры',
      'UI-архитектура и переиспользуемые компоненты',
      'GraphQL и REST API интеграции',
      'Оптимизация производительности',
      'Код-ревью и инженерные практики',
    ],
    highlightsTitle: 'Что я привношу в проект',
    highlights: [
      {
        title: 'Опыт корпоративной разработки',
        description:
          'Я работала с административными панелями, аналитическими интерфейсами, большими таблицами, формами и фильтрами, где особенно важны производительность и поддерживаемость.',
      },
      {
        title: 'Современный Angular-подход',
        description:
          'Использую современные возможности Angular: Signals, standalone-компоненты и реактивные подходы, сохраняя архитектуру понятной и практичной.',
      },
      {
        title: 'Ответственность за результат',
        description:
          'Могу довести функциональность от идеи до релиза: уточнить требования, реализовать интерфейс, интегрировать API, обработать нестандартные сценарии и улучшить пользовательский опыт.',
      },
    ],
    buildTitle: 'Что я разрабатываю',
    buildItems: [
      {
        title: 'Корпоративные административные системы',
        description:
          'Административные панели, системы согласования, отчётность, фильтры и внутренние бизнес-инструменты.',
      },
      {
        title: 'E-commerce платформы',
        description:
          'Управление товарами, оформление заказов, настройка цен, личные кабинеты и клиентские интерфейсы.',
      },
      {
        title: 'Сложные бизнес-интерфейсы',
        description:
          'Большие таблицы, продвинутые фильтры, экспорты, reactive forms и оптимизация производительности UI.',
      },
    ],
  },
};
