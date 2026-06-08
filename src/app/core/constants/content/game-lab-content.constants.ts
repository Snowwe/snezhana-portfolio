import { GameLabContent } from '@core/models/game-lab.model';

export const GAME_LAB_CONTENT: Record<'en' | 'ru', GameLabContent> = {
  en: {
    label: 'Game Lab',
    title: 'Remote Job Hunter: career simulator in progress',
    description:
      'A learning project where I combine Angular, Phaser, NestJS and later Three.js to build a small browser game about growing as a remote frontend developer.',
    playTab: 'Play',
    devDiaryTab: 'Dev Diary',
    currentProjectTitle: 'Current Project',
    currentProjectItems: [
      'Building a career simulator where the player improves skills, applies to remote jobs and grows from Junior to Senior / Lead.',
      'Starting with Angular game logic and UI, then adding Phaser as the visual game layer.',
      'Documenting each step: game design, architecture decisions, state management and implementation details.',
      'Later stages will include NestJS backend, WebSockets, leaderboard and cloud saves.',
    ],
    mvpTitle: 'MVP Idea',
    roadmapTitle: 'Learning Roadmap',
    roadmap: [
      {
        title: 'Game concept and MVP',
        description:
          'Define the core loop: learn skills, spend energy, apply to jobs, pass interviews and receive offers.',
        status: 'current',
      },
      {
        title: 'Angular game state',
        description:
          'Create player stats, actions, job offers, event log and game rules using TypeScript and Signals.',
        status: 'planned',
      },
      {
        title: 'Phaser basics',
        description:
          'Add Phaser scene, render the player, simple world objects and connect visual layer with Angular state.',
        status: 'planned',
      },
      {
        title: 'Game loop',
        description:
          'Understand update cycles, frame-based logic, timers and how browser games differ from regular SPA apps.',
        status: 'planned',
      },
      {
        title: 'Job board mechanics',
        description:
          'Generate vacancies with requirements, salary ranges and interview difficulty.',
        status: 'planned',
      },
      {
        title: 'Interview system',
        description:
          'Create technical interview events based on skills: Angular, TypeScript, RxJS, English and system design.',
        status: 'planned',
      },
      {
        title: 'NestJS backend',
        description:
          'Add backend API for saves, leaderboard, player profiles and long-term progression.',
        status: 'planned',
      },
      {
        title: 'WebSockets and leaderboard',
        description: 'Add real-time leaderboard updates and shared game events.',
        status: 'planned',
      },
      {
        title: 'Three.js playground',
        description:
          'Experiment with a small 3D virtual office scene as a separate learning module.',
        status: 'planned',
      },
      {
        title: 'Deployment',
        description:
          'Publish playable demo, document architecture and keep progress visible in the portfolio.',
        status: 'planned',
      },
    ],
    mvpName: 'Remote Job Hunter',
    mvpDescription:
      'Career simulator where the player learns skills, applies to remote jobs, passes interviews and grows from Junior to Senior / Lead.',
    journalTitle: 'Dev Journal',
    journal: [
      {
        day: 'Day 1',
        title: 'Portfolio foundation',
        description:
          'Created the bilingual Angular portfolio, deployed it to GitHub Pages and prepared the Game Lab section.',
      },
      {
        day: 'Day 2',
        title: 'Game idea and first MVP',
        description:
          'Selected Remote Job Hunter as the main idea: a career simulator where the player improves skills, applies to jobs and passes interviews.',
      },
      {
        day: 'Day 3',
        title: 'Game state and job board',
        description:
          'Added player state with Angular Signals: skills, energy, motivation, money, level, job offers and application rules.',
      },
      {
        day: 'Day 4',
        title: 'Interview and career progress',
        description:
          'Implemented the interview mechanic: level-based questions, interview result, job offer, job switching and career profile.',
      },
      {
        day: 'Day 5',
        title: 'First Phaser layer',
        description:
          'Connected Phaser as the visual game layer: added the office, canvas scene and the first player represented by a simple object.',
      },
    ],
  },

  ru: {
    label: 'Game Lab',
    title: 'Remote Job Hunter: карьерный симулятор в разработке',
    description:
      'Учебный проект, в котором я объединяю Angular, Phaser, NestJS и позже Three.js, чтобы создать небольшую браузерную игру о развитии frontend-разработчика и поиске удалённой работы.',
    playTab: 'Играть',
    devDiaryTab: 'Дневник разработки',
    currentProjectTitle: 'Текущий проект',
    currentProjectItems: [
      'Создаю карьерный симулятор, где игрок прокачивает навыки, откликается на удалённые вакансии и растёт от Junior до Senior / Lead.',
      'Начинаю с игровой логики и интерфейса на Angular, затем добавлю Phaser как визуальный игровой слой.',
      'Документирую каждый этап: игровую механику, архитектурные решения, управление состоянием и детали реализации.',
      'На следующих этапах добавлю backend на NestJS, WebSockets, таблицу лидеров и сохранение прогресса.',
    ],
    mvpTitle: 'Идея MVP',
    mvpName: 'Remote Job Hunter',
    mvpDescription:
      'Карьерный симулятор, в котором игрок изучает технологии, откликается на удалённые вакансии, проходит интервью и развивается от Junior до Senior и Lead.',
    roadmapTitle: 'План изучения',
    roadmap: [
      {
        title: 'Концепция игры и MVP',
        description:
          'Определить основной игровой цикл: изучать навыки, тратить энергию, откликаться на вакансии, проходить интервью и получать офферы.',
        status: 'current',
      },
      {
        title: 'Игровое состояние на Angular',
        description:
          'Создать характеристики игрока, действия, вакансии, журнал событий и правила игры с помощью TypeScript и Signals.',
        status: 'planned',
      },
      {
        title: 'Основы Phaser',
        description:
          'Добавить сцену Phaser, отрисовать игрока, простые объекты мира и связать визуальный слой с состоянием Angular.',
        status: 'planned',
      },
      {
        title: 'Игровой цикл',
        description:
          'Разобрать обновление игры, логику по кадрам, таймеры и отличие браузерной игры от обычного SPA-приложения.',
        status: 'planned',
      },
      {
        title: 'Механика вакансий',
        description:
          'Генерировать вакансии с требованиями, зарплатной вилкой и сложностью интервью.',
        status: 'planned',
      },
      {
        title: 'Система интервью',
        description:
          'Создать события технических интервью на основе навыков: Angular, TypeScript, RxJS, English и system design.',
        status: 'planned',
      },
      {
        title: 'Backend на NestJS',
        description:
          'Добавить API для сохранений, таблицы лидеров, профиля игрока и долгосрочного прогресса.',
        status: 'planned',
      },
      {
        title: 'WebSockets и таблица лидеров',
        description: 'Добавить обновление рейтинга в реальном времени и общие игровые события.',
        status: 'planned',
      },
      {
        title: 'Three.js playground',
        description: 'Отдельно поэкспериментировать с небольшой 3D-сценой виртуального офиса.',
        status: 'planned',
      },
      {
        title: 'Деплой',
        description:
          'Опубликовать играбельное демо, описать архитектуру и показывать прогресс в портфолио.',
        status: 'planned',
      },
    ],
    journalTitle: 'Дневник разработки',
    journal: [
      {
        day: 'День 1',
        title: 'Основа портфолио',
        description:
          'Создала двуязычное Angular-портфолио, выложила его на GitHub Pages и подготовила раздел Game Lab.',
      },
      {
        day: 'День 2',
        title: 'Идея игры и первый MVP',
        description:
          'Выбрала Remote Job Hunter как основную идею: карьерный симулятор, где игрок прокачивает навыки, откликается на вакансии и проходит интервью.',
      },
      {
        day: 'День 3',
        title: 'Игровое состояние и вакансии',
        description:
          'Добавила состояние игрока на Angular Signals: навыки, энергию, мотивацию, деньги, уровень, вакансии и правила отклика.',
      },
      {
        day: 'День 4',
        title: 'Интервью и карьерный прогресс',
        description:
          'Реализовала механику собеседования: вопросы по уровням, результат интервью, получение оффера, смену текущей работы и карьерный профиль.',
      },
      {
        day: 'День 5',
        title: 'Первый Phaser-слой',
        description:
          'Подключила Phaser как визуальный слой игры: добавила офис, canvas-сцену и первого игрока в виде простого объекта.',
      },
    ],
  },
};
