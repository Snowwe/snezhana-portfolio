import { ResumeContent } from '@core/models/resume.model';

export const RESUME_CONTENT: Record<'en' | 'ru', ResumeContent> = {
  en: {
    title: 'Resume',
    subtitle: 'Senior Angular Frontend Developer',
    description:
      '6+ years of experience building complex, high-performance web applications across CRM, fintech and e-commerce domains.',
    downloadLabel: 'Download CV',
    downloadUrl: '/files/CV_Angular_Snezhana-Novitskaya_2026.pdf',
    experienceTitle: 'Work Experience',
    readMore: 'Read more',
    collapse: 'Collapse',
    experience: [
      {
        id: 'clear-blue-design',
        period: '04.2024 — 09.2025',
        company: 'ClearBlueDesign',
        summary:
          'Development of enterprise-level Angular applications for e-commerce and sports-related products.',
        projects: [
          {
            title: 'Printing Source',
            description: 'E-commerce platform for ordering and managing printed products.',
            responsibilities: [
              'Developed enterprise-level Angular applications with Angular 17–18.',
              'Worked with Angular Signals and modern Angular patterns.',
              'Designed reusable components and modular frontend architecture.',
              'Built and optimized data-heavy UI: tables, forms and filters.',
              'Integrated frontend application with REST API.',
            ],
            stack: ['Angular 18', 'TypeScript', 'RxJS', 'Signals', 'Bootstrap', 'SCSS', 'Git'],
          },
          {
            title: 'RBI League',
            description: 'MLB-related sports application with high user interaction.',
            responsibilities: [
              'Developed UI features for a large-scale sports application.',
              'Improved UI responsiveness and optimized complex views.',
              'Refactored legacy code to improve maintainability.',
              'Worked with reactive data flows using RxJS.',
            ],
            stack: ['Angular 17', 'TypeScript', 'RxJS', 'Bootstrap', 'SCSS', 'Git'],
          },
        ],
      },
      {
        id: 'codiq',
        period: '05.2023 — 03.2024',
        company: 'CodiQ',
        summary: 'Frontend development for an industrial factory automation system.',
        projects: [
          {
            title: 'Factory Automation',
            description: 'System for automating manufacturing processes for industrial companies.',
            responsibilities: [
              'Developed UI for an industrial automation system.',
              'Built complex forms, dashboards and workflow modules.',
              'Integrated frontend with backend services through REST API.',
              'Improved code quality, fixed critical issues and optimized existing functionality.',
            ],
            stack: ['Angular 13', 'TypeScript', 'RxJS', 'Angular Material', 'SCSS', 'Bitbucket'],
          },
        ],
      },
      {
        id: 'andersen',
        period: '12.2018 — 02.2023',
        company: 'ANDERSEN',
        role: 'Angular Developer / Tech Lead',
        summary: 'Enterprise frontend development for fintech and internal corporate systems.',
        highlights: [
          'Developed enterprise-level applications in fintech and internal corporate systems.',
          'Led frontend development for an internal company portal as Technical Lead.',
          'Designed and implemented application architecture and reusable components.',
          'Worked with NgRx for state management: store, effects and selectors.',
          'Participated in architectural decisions, code reviews, mentoring and technical interviews.',
        ],
        projects: [
          {
            title: 'Online Banking',
            description: 'Fintech system for banking-related workflows.',
            responsibilities: [
              'Developed high-load UI for banking business processes.',
              'Worked with reactive data flows using RxJS and NgRx.',
              'Built forms, dashboards and data-driven components.',
              'Integrated frontend application with backend API.',
            ],
            stack: ['Angular 13', 'TypeScript', 'RxJS', 'NgRx', 'GraphQL', 'SCSS'],
          },
          {
            title: 'Andersen Portal',
            description: 'Internal corporate portal with employee, project and news information.',
            responsibilities: [
              'Contributed to solution architecture and technical decisions.',
              'Led frontend development and client architecture improvements.',
              'Developed reusable components and internal UI modules.',
            ],
            stack: ['Angular', 'TypeScript', 'RxJS', 'SASS', 'Git'],
          },
          {
            title: 'VTB Bank',
            description: 'GTB reporting module for a corporate banking portal.',
            responsibilities: [
              'Developed reporting module for corporate banking system.',
              'Built UI components and integrated them with backend services.',
              'Worked with enterprise frontend solutions and banking workflows.',
            ],
            stack: ['Angular', 'TypeScript', 'RxJS', 'SASS', '.NET Razor'],
          },
        ],
      },
    ],
    educationTitle: 'Education',
    languagesTitle: 'Languages',
    education: [
      {
        title: 'IT-Step Academy',
        description: 'Software Engineering',
      },
      {
        title: 'Belarusian Trade and Economic University of Consumer Cooperatives',
        description: 'Economics and legal support of economic activity',
      },
    ],
    languages: [
      {
        title: 'English',
        description: 'B1–B2, daily communication with international teams',
      },
      {
        title: 'Russian',
        description: 'Native',
      },
    ],
  },

  ru: {
    title: 'Резюме',
    subtitle: 'Senior Angular Frontend Developer',
    description:
      'Более 6 лет опыта разработки сложных и высоконагруженных web-приложений в fintech, CRM и e-commerce доменах.',
    downloadLabel: 'Скачать резюме',
    downloadUrl: '/files/CV_Angular_Новицкая-Снежана_2026.pdf',
    experienceTitle: 'Опыт работы',
    readMore: 'Подробнее',
    collapse: 'Свернуть',
    experience: [
      {
        id: 'clear-blue-design',
        period: '04.2024 — 09.2025',
        company: 'ClearBlueDesign',
        summary:
          'Разработка enterprise-level Angular-приложений для e-commerce платформы и спортивного приложения.',
        highlights: [
          'Разрабатывала enterprise-level приложения в сфере fintech и внутренних корпоративных систем.',
          'Руководила frontend-разработкой внутреннего корпоративного портала в роли Technical Lead.',
          'Проектировала и реализовывала frontend-архитектуру и переиспользуемые UI-компоненты.',
          'Работала с NgRx для управления состоянием приложения: store, effects, selectors.',
          'Участвовала в архитектурных решениях, code review, менторинге и технических интервью.',
        ],
        projects: [
          {
            title: 'Printing Source',
            description:
              'E-commerce платформа для оформления и управления заказами печатной продукции.',
            responsibilities: [
              'Разрабатывала enterprise-level Angular-приложения на Angular 17–18.',
              'Использовала Angular Signals и современные возможности Angular.',
              'Проектировала переиспользуемые компоненты и модульную архитектуру.',
              'Разрабатывала и оптимизировала сложные интерфейсы с большим объёмом данных: таблицы, формы, фильтры.',
              'Интегрировала frontend-приложение с REST API.',
            ],
            stack: ['Angular 18', 'TypeScript', 'RxJS', 'Signals', 'Bootstrap', 'SCSS', 'Git'],
          },
          {
            title: 'RBI League',
            description: 'Спортивное приложение, связанное с Major League Baseball.',
            responsibilities: [
              'Разрабатывала UI-функционал для крупного спортивного приложения.',
              'Улучшала отзывчивость интерфейсов и оптимизировала сложные представления.',
              'Рефакторила legacy-код для повышения поддерживаемости.',
              'Работала с реактивными потоками данных с использованием RxJS.',
            ],
            stack: ['Angular 17', 'TypeScript', 'RxJS', 'Bootstrap', 'SCSS', 'Git'],
          },
        ],
      },
      {
        id: 'codiq',
        period: '05.2023 — 03.2024',
        company: 'CodiQ',
        summary: 'Frontend-разработка для системы автоматизации производственных процессов.',
        projects: [
          {
            title: 'Factory Automation',
            description:
              'Система автоматизации производственных процессов для промышленных предприятий.',
            responsibilities: [
              'Разрабатывала пользовательский интерфейс для системы промышленной автоматизации.',
              'Создавала сложные формы, dashboard-интерфейсы и workflow-модули.',
              'Интегрировала frontend-приложение с backend-сервисами через REST API.',
              'Улучшала качество кода, исправляла критические ошибки и оптимизировала существующий функционал.',
            ],
            stack: ['Angular 13', 'TypeScript', 'RxJS', 'Angular Material', 'SCSS', 'Bitbucket'],
          },
        ],
      },
      {
        id: 'andersen',
        period: '12.2018 — 02.2023',
        company: 'ANDERSEN',
        role: 'Angular Developer / Tech Lead',
        summary:
          'Разработка enterprise-level приложений в сфере fintech и внутренних корпоративных систем.',
        projects: [
          {
            title: 'Online Banking',
            description: 'Fintech-система для банковских бизнес-процессов.',
            responsibilities: [
              'Разрабатывала высоконагруженный UI для банковских бизнес-процессов.',
              'Работала с реактивными потоками данных: RxJS и NgRx.',
              'Создавала формы, dashboard-интерфейсы и data-driven компоненты.',
              'Интегрировала frontend-приложение с backend API.',
            ],
            stack: ['Angular 13', 'TypeScript', 'RxJS', 'NgRx', 'GraphQL', 'SCSS'],
          },
          {
            title: 'Andersen Portal',
            description:
              'Внутренний корпоративный портал с информацией о сотрудниках, проектах, новостях и событиях компании.',
            responsibilities: [
              'Участвовала в проектировании архитектуры решения и технических обсуждениях.',
              'Руководила frontend-разработкой и развивала клиентскую архитектуру.',
              'Разрабатывала переиспользуемые компоненты и внутренние UI-модули.',
            ],
            stack: ['Angular', 'TypeScript', 'RxJS', 'SASS', 'Git'],
          },
          {
            title: 'VTB Bank',
            description: 'GTB reporting module для корпоративного банковского портала.',
            responsibilities: [
              'Разрабатывала reporting-модуль для корпоративной банковской системы.',
              'Создавала UI-компоненты и интегрировала их с backend-сервисами.',
              'Работала с enterprise frontend-решениями и банковскими workflow.',
            ],
            stack: ['Angular', 'TypeScript', 'RxJS', 'SASS', '.NET Razor'],
          },
        ],
      },
    ],
    educationTitle: 'Образование',
    languagesTitle: 'Языки',
    education: [
      {
        title: 'IT-Step Academy',
        description: 'Software Engineering',
      },
      {
        title: 'Белорусский торгово-экономический университет потребительской кооперации',
        description: 'Экономика и правовое обеспечение хозяйственной деятельности',
      },
    ],
    languages: [
      {
        title: 'English',
        description: 'B1–B2, ежедневное взаимодействие с международными командами',
      },
      {
        title: 'Russian',
        description: 'Native',
      },
    ],
  },
};
