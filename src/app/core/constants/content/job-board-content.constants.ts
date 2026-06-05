import { JobBoardContent } from '@core/models/job-board-content.model';

export const JOB_BOARD_CONTENT: Record<'en' | 'ru', JobBoardContent> = {
  en: {
    label: 'Job Board',
    title: 'Remote Opportunities',
    description: 'Vacancies are unlocked when your skills match the requirements.',
    open: 'Open',
    locked: 'Locked',
    apply: 'Apply',
    currentJob: 'Current job',
    need: 'Need',
  },
  ru: {
    label: 'Вакансии',
    title: 'Удалённые возможности',
    description: 'Вакансии открываются, когда твои навыки соответствуют требованиям.',
    open: 'Доступно',
    locked: 'Закрыто',
    apply: 'Откликнуться',
    currentJob: 'Текущая работа',
    need: 'Нужно',
  },
};
