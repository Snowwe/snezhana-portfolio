import { CareerProfileContent } from '@core/models/career-profile-content.model';

export const CAREER_PROFILE_CONTENT: Record<'en' | 'ru', CareerProfileContent> = {
  en: {
    label: 'Career Profile',
    title: 'Frontend career progress',
    description: 'A compact summary of the current player progress in the career simulator.',
    level: 'Level',
    currentJob: 'Current Job',
    openToWork: 'Open To Work',
    acceptedOffers: 'Accepted Offers',
    totalSkill: 'Total Skill',
    money: 'Money',
  },
  ru: {
    label: 'Карьерный профиль',
    title: 'Прогресс frontend-карьеры',
    description: 'Краткая сводка текущего прогресса игрока в карьерном симуляторе.',
    level: 'Уровень',
    currentJob: 'Текущая работа',
    openToWork: 'Открыта к предложениям',
    acceptedOffers: 'Принятые офферы',
    totalSkill: 'Сумма навыков',
    money: 'Деньги',
  },
};
