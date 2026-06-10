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
        status: 'completed',
      },
      {
        title: 'Angular game state',
        description:
          'Create player stats, actions, job offers, event log and game rules using TypeScript and Signals.',
        status: 'completed',
      },
      {
        title: 'Phaser basics',
        description:
          'Add Phaser scene, player movement, interactive office zones, collision system and contextual interaction hints.',
        status: 'completed',
      },
      {
        title: 'Interactive office',
        description:
          'Create learning desks, office interactions, skill activities and connect workspace actions with player progression.',
        status: 'current',
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
          'Publish a playable demo, document the architecture and keep progress visible in the portfolio.',
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
          'Connected Phaser as the visual game layer: added the office scene, player movement, interactive office zones and contextual interaction hints.',
      },
      {
        day: 'Day 6',
        title: 'Interactive office prototype',
        description:
          'Added learning desks, movement boundaries, furniture collisions, interaction hints and centralized Phaser scene configuration.',
      },
      {
        day: 'Day 7',
        title: 'Office actions and Angular state',
        description:
          'Connected Phaser office interactions with Angular Signals.\n' +
          'Added E-key actions for learning and energy recovery.\n' +
          'Implemented office zones, collision handling and interaction UI.\n' +
          'Refactored scene structure, improved typing and reduced unnecessary updates.',
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
        status: 'completed',
      },
      {
        title: 'Состояние игры на Angular',
        description:
          'Создать характеристики игрока, действия, вакансии, журнал событий и игровые правила с использованием TypeScript и Signals.',
        status: 'completed',
      },
      {
        title: 'Основы Phaser',
        description:
          'Добавить сцену Phaser, перемещение игрока, интерактивные офисные зоны, систему коллизий и контекстные подсказки.',
        status: 'completed',
      },
      {
        title: 'Интерактивный офис',
        description:
          'Создать обучающие столы, офисные взаимодействия, активности для развития навыков и связать их с прогрессом игрока.',
        status: 'current',
      },
      {
        title: 'Игровой цикл',
        description:
          'Разобраться с обновлением кадров, игровой логикой, таймерами и отличиями браузерных игр от обычных SPA-приложений.',
        status: 'planned',
      },
      {
        title: 'Механика вакансий',
        description:
          'Генерировать вакансии с требованиями, диапазонами зарплат и сложностью интервью.',
        status: 'planned',
      },
      {
        title: 'Система интервью',
        description:
          'Создать технические интервью на основе навыков Angular, TypeScript, RxJS, English и System Design.',
        status: 'planned',
      },
      {
        title: 'Backend на NestJS',
        description:
          'Добавить API для сохранений, таблицы лидеров, профилей игроков и долгосрочного прогресса.',
        status: 'planned',
      },
      {
        title: 'WebSockets и таблица лидеров',
        description: 'Добавить обновление рейтинга в реальном времени и общие игровые события.',
        status: 'planned',
      },
      {
        title: 'Песочница Three.js',
        description:
          'Поэкспериментировать с небольшой 3D-сценой виртуального офиса как отдельным учебным модулем.',
        status: 'planned',
      },
      {
        title: 'Публикация проекта',
        description:
          'Опубликовать игровое демо, описать архитектуру и показывать прогресс в портфолио.',
        status: 'planned',
      },
    ],
    journalTitle: 'Дневник разработки',
    journal: [
      {
        day: 'День 1',
        title: 'Основа портфолио',
        description:
          'Создала двуязычное Angular-портфолио, опубликовала его на GitHub Pages и подготовила раздел Game Lab.',
      },
      {
        day: 'День 2',
        title: 'Идея игры и первый MVP',
        description:
          'Выбрала Remote Job Hunter как основную идею: карьерный симулятор, где игрок развивает навыки, откликается на вакансии и проходит интервью.',
      },
      {
        day: 'День 3',
        title: 'Состояние игры и вакансии',
        description:
          'Добавила состояние игрока на Angular Signals: навыки, энергия, мотивация, деньги, уровень, офферы и правила отклика.',
      },
      {
        day: 'День 4',
        title: 'Интервью и карьерный рост',
        description:
          'Реализовала механику интервью: вопросы по уровню, результат интервью, получение оффера, смену работы и карьерный профиль.',
      },
      {
        day: 'День 5',
        title: 'Первый слой Phaser',
        description:
          'Подключила Phaser как визуальный игровой слой: добавила офисную сцену, перемещение игрока, интерактивные офисные зоны и контекстные подсказки.',
      },
      {
        day: 'День 6',
        title: 'Прототип интерактивного офиса',
        description:
          'Добавила обучающие столы, ограничения перемещения, коллизии с мебелью, подсказки взаимодействия и централизованную конфигурацию сцены Phaser.',
      },
      {
        day: 'День 7',
        title: 'Действия в офисе и состояние Angular',
        description: `Связала действия в офисе Phaser с состоянием игры на Angular: нажатие E возле столов теперь прокачивает навыки или восстанавливает энергию, а Signals автоматически обновляют интерфейс.
          Реализовала офисные зоны, обработку коллизий и пользовательский интерфейс взаимодействия.
          Рефакторинг структуры сцены, улучшение типизации и уменьшение ненужных обновлений.`,
      },
    ],
  },
};
