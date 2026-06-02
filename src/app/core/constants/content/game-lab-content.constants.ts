import { GameLabContent } from '@core/models/game-lab.model';

export const GAME_LAB_CONTENT: Record<'en' | 'ru', GameLabContent> = {
  en: {
    label: 'Game Lab',
    title: 'Angular + Phaser + NestJS learning project',
    description:
      'A practical learning space where I document my transition from Angular frontend development into browser game development.',
    currentProjectTitle: 'Current Project',
    currentProjectItems: [
      'Learning Phaser as a 2D game framework for browser games.',
      'Building a small game step by step with clean architecture and TypeScript.',
      'Exploring how frontend skills can be applied to game UI, real-time interactions and interactive systems.',
    ],
    roadmapTitle: 'Learning Roadmap',
    roadmap: [
      {
        title: 'Phaser Basics',
        description: 'Scenes, sprites, assets, input and first playable prototype.',
        status: 'current',
      },
      {
        title: 'Game Loop',
        description: 'Understanding update cycles, FPS and frame-based logic.',
        status: 'planned',
      },
      {
        title: 'Physics',
        description: 'Movement, collisions, boundaries and simple interactions.',
        status: 'planned',
      },
      {
        title: 'Tilemaps',
        description: 'Creating maps, layers, obstacles and reusable level structure.',
        status: 'planned',
      },
      {
        title: 'Multiplayer',
        description: 'Preparing the game for real-time player interactions.',
        status: 'planned',
      },
      {
        title: 'NestJS Backend',
        description: 'Backend API, rooms, leaderboard and game state management.',
        status: 'planned',
      },
      {
        title: 'WebSockets',
        description: 'Real-time communication between players and the server.',
        status: 'planned',
      },
      {
        title: 'Deployment',
        description: 'Publishing the game demo and documenting the architecture.',
        status: 'planned',
      },
    ],
    journalTitle: 'Dev Journal',
    journal: [
      {
        day: 'Day 1',
        title: 'Project direction',
        description:
          'Defined the learning path: Angular portfolio, Phaser game page, later NestJS backend and Three.js playground.',
      },
      {
        day: 'Day 2',
        title: 'Game Lab structure',
        description: 'Creating a dedicated page to document progress, roadmap and technical notes.',
      },
      {
        day: 'Day 3',
        title: 'First playable prototype',
        description:
          'Next step: initialize Phaser, create the first scene and render a simple player object.',
      },
    ],
  },

  ru: {
    label: 'Game Lab',
    title: 'Учебный проект Angular + Phaser + NestJS',
    description:
      'Раздел, где я пошагово изучаю разработку браузерных игр и показываю, как frontend-опыт можно применять в интерактивных проектах.',
    currentProjectTitle: 'Текущий проект',
    currentProjectItems: [
      'Изучаю Phaser как 2D-фреймворк для браузерных игр.',
      'Постепенно создаю небольшую игру на TypeScript с понятной архитектурой.',
      'Разбираю, как frontend-навыки помогают в игровых интерфейсах, интерактивности и real-time логике.',
    ],
    roadmapTitle: 'План изучения',
    roadmap: [
      {
        title: 'Основы Phaser',
        description: 'Сцены, объекты, ресурсы, управление и первый игровой прототип.',
        status: 'current',
      },
      {
        title: 'Игровой цикл',
        description: 'Как работает обновление игры, FPS и логика по кадрам.',
        status: 'planned',
      },
      {
        title: 'Физика',
        description: 'Движение, столкновения, границы карты и простые взаимодействия.',
        status: 'planned',
      },
      {
        title: 'Карты уровней',
        description: 'Создание карт, слоёв, препятствий и структуры уровней.',
        status: 'planned',
      },
      {
        title: 'Мультиплеер',
        description: 'Подготовка игры к взаимодействию нескольких игроков.',
        status: 'planned',
      },
      {
        title: 'Backend на NestJS',
        description: 'API, комнаты, таблица лидеров и управление состоянием игры.',
        status: 'planned',
      },
      {
        title: 'WebSockets',
        description: 'Обмен данными между игроками и сервером в реальном времени.',
        status: 'planned',
      },
      {
        title: 'Деплой',
        description: 'Публикация демо и описание архитектуры проекта.',
        status: 'planned',
      },
    ],
    journalTitle: 'Дневник разработки',
    journal: [
      {
        day: 'День 1',
        title: 'Выбор направления',
        description:
          'Определила путь изучения: Angular-портфолио, страница Game Lab, позже backend на NestJS и Three.js playground.',
      },
      {
        day: 'День 2',
        title: 'Структура Game Lab',
        description:
          'Создаю отдельную страницу для прогресса, плана изучения и технических заметок.',
      },
      {
        day: 'День 3',
        title: 'Первый игровой прототип',
        description:
          'Следующий шаг: подключить Phaser, создать первую сцену и отрисовать простой объект игрока.',
      },
    ],
  },
};
