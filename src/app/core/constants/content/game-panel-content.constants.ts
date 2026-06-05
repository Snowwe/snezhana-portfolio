import { GamePanelContent } from '@core/models/game-panel-content.model';

export const GAME_PANEL_CONTENT: Record<'en' | 'ru', GamePanelContent> = {
  en: {
    label: 'Prototype',
    title: 'Remote Job Hunter',
    description: 'First playable game logic: improve skills, spend energy and recover by resting.',
    needRest: 'You need to rest before studying',
    totalSkill: 'Total Skill',

    stats: {
      level: 'Level',
      money: 'Money',
      energy: 'Energy',
      motivation: 'Motivation',
      currentJob: 'Current Job',
      openToWork: 'Open To Work',
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
      reset: 'Reset game',
    },
  },

  ru: {
    label: 'Прототип',
    title: 'Remote Job Hunter',
    description:
      'Первая игровая механика: развитие навыков, расход энергии и восстановление через отдых.',
    needRest: 'Перед обучением нужно отдохнуть',
    totalSkill: 'Сумма навыков',

    stats: {
      level: 'Уровень',
      money: 'Деньги',
      energy: 'Энергия',
      motivation: 'Мотивация',
      currentJob: 'Текущая работа',
      openToWork: 'Открыт к предложениям',
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
      reset: 'Сбросить игру',
    },
  },
};
