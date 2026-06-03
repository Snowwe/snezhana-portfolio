import { GamePanelContent } from '@core/models/game-panel-content.model';

export const GAME_PANEL_CONTENT: Record<'en' | 'ru', GamePanelContent> = {
  en: {
    label: 'Prototype',
    title: 'Remote Job Hunter',
    description: 'First playable game logic: improve skills, spend energy and recover by resting.',

    totalSkill: 'Total Skill',

    stats: {
      level: 'Level',
      money: 'Money',
      energy: 'Energy',
      motivation: 'Motivation',
    },

    skills: {
      angular: 'Angular',
      typescript: 'TypeScript',
      rxjs: 'RxJS',
      english: 'English',
    },

    actions: {
      learnAngular: 'Learn Angular',
      learnTypescript: 'Learn TypeScript',
      practiceRxjs: 'Practice RxJS',
      learnEnglish: 'Learn English',
      rest: 'Rest',
    },
  },

  ru: {
    label: 'Прототип',
    title: 'Remote Job Hunter',
    description:
      'Первая игровая механика: развитие навыков, расход энергии и восстановление через отдых.',

    totalSkill: 'Сумма навыков',

    stats: {
      level: 'Уровень',
      money: 'Деньги',
      energy: 'Энергия',
      motivation: 'Мотивация',
    },

    skills: {
      angular: 'Angular',
      typescript: 'TypeScript',
      rxjs: 'RxJS',
      english: 'Английский',
    },

    actions: {
      learnAngular: 'Изучать Angular',
      learnTypescript: 'Изучать TypeScript',
      practiceRxjs: 'Практиковать RxJS',
      learnEnglish: 'Учить английский',
      rest: 'Отдыхать',
    },
  },
};
