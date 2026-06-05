import { InterviewContent } from '@features/remote-job-hunter/models/interview-content.model';

export const INTERVIEW_CONTENT: Record<'en' | 'ru', InterviewContent> = {
  en: {
    title: 'Interview',
    cancel: 'Cancel',
    continue: 'Continue',

    passed: 'Interview passed',
    failed: 'Interview failed',

    passedDescription: 'Great answer. You received an offer for this position.',

    failedDescription: 'This answer was not correct. Motivation will be reduced.',
  },

  ru: {
    title: 'Собеседование',
    cancel: 'Отмена',
    continue: 'Продолжить',

    passed: 'Собеседование пройдено',
    failed: 'Собеседование не пройдено',

    passedDescription: 'Отличный ответ. Вы получили предложение на эту позицию.',

    failedDescription: 'Ответ оказался неверным. Мотивация будет снижена.',
  },
};
