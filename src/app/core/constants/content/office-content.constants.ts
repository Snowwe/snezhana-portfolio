import { OfficeContent } from '@core/models/office-content.model';

export const OFFICE_CONTENT: Record<'en' | 'ru', OfficeContent> = {
  en: {
    label: 'Office',
    title: 'Virtual Workspace',
    description: 'Move around your workspace, study new skills and explore career opportunities.',
  },

  ru: {
    label: 'Офис',
    title: 'Виртуальное рабочее пространство',
    description: 'Перемещайтесь по офису, изучайте новые навыки и развивайте карьеру.',
  },
};
