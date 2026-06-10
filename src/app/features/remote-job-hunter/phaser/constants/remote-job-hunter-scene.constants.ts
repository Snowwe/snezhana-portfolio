import { RemoteJobHunterSceneConfig } from '@features/remote-job-hunter/phaser/models/office-zone.model';

export const REMOTE_JOB_HUNTER_SCENE_COLORS = {
  cyan: {
    text: '#22d3ee',
    hex: 0x22d3ee,
  },
  white: {
    text: '#ffffff',
  },
  slate: {
    dark: 0x0f172a,
  },
  angular: 0xdd0031,
  typescript: 0x3178c6,
  rxjs: 0xb7178c,
  english: 0x16a34a,
  coffee: 0x7c4a2d,
  amber: 0xf59e0b,
  red: 0xf87171,
} as const;

export const REMOTE_JOB_HUNTER_SCENE: RemoteJobHunterSceneConfig = {
  size: {
    width: 1000,
    height: 500,
  },
  layout: {
    padding: 16,
    headerHeight: 44,
  },
  colors: {
    title: REMOTE_JOB_HUNTER_SCENE_COLORS.cyan.text,
    text: REMOTE_JOB_HUNTER_SCENE_COLORS.white.text,
    player: REMOTE_JOB_HUNTER_SCENE_COLORS.cyan.hex,

    interactionKeyText: '#0f172a',
    interactionKeyFill: REMOTE_JOB_HUNTER_SCENE_COLORS.cyan.hex,
    interactionKeyBorder: 0xffffff,

    interactionPanelBackground: REMOTE_JOB_HUNTER_SCENE_COLORS.slate.dark,
    interactionPanelBorder: REMOTE_JOB_HUNTER_SCENE_COLORS.cyan.hex,
  },
  title: {
    text: 'Remote Job Hunter',
    fontSize: '28px',
  },
  player: {
    label: 'Junior',
    size: 20,
    speed: 3,
    labelGap: 10,
    labelOffsetX: 12,
    startPosition: {
      x: 500,
      y: 250,
    },
    labelFontSize: '14px',
  },
  zones: {
    width: 120,
    height: 64,
    opacity: 0.9,
    labelFontSize: '13px',
    collisionPadding: 8,
    interactionPadding: 46,
    interactionHintGap: 12,
    items: [
      {
        id: 'angular-desk',
        label: { en: 'Angular Desk', ru: 'Angular стол' },
        actionLabel: { en: 'Study Angular', ru: 'Изучать Angular' },
        feedbackLabel: { en: '+5 Angular', ru: '+5 Angular' },
        feedbackColor: REMOTE_JOB_HUNTER_SCENE_COLORS.cyan.hex,
        actionType: 'study-angular',
        x: 140,
        y: 160,
        color: REMOTE_JOB_HUNTER_SCENE_COLORS.angular,
      },
      {
        id: 'ts-shelf',
        label: { en: 'TS Shelf', ru: 'TS полка' },
        actionLabel: { en: 'Practice TypeScript', ru: 'Практиковать TypeScript' },
        feedbackLabel: { en: '+5 TypeScript', ru: '+5 TypeScript' },
        feedbackColor: REMOTE_JOB_HUNTER_SCENE_COLORS.cyan.hex,
        actionType: 'practice-typescript',
        x: 820,
        y: 190,
        color: REMOTE_JOB_HUNTER_SCENE_COLORS.typescript,
      },
      {
        id: 'rxjs-shelf',
        label: { en: 'RxJS Shelf', ru: 'RxJS полка' },
        actionLabel: { en: 'Practice RxJS', ru: 'Практиковать RxJS' },
        feedbackLabel: { en: '+4 RxJS', ru: '+4 RxJS' },
        feedbackColor: REMOTE_JOB_HUNTER_SCENE_COLORS.cyan.hex,
        actionType: 'practice-rxjs',
        x: 140,
        y: 340,
        color: REMOTE_JOB_HUNTER_SCENE_COLORS.rxjs,
      },
      {
        id: 'english-book',
        label: { en: 'English Book', ru: 'English книга' },
        actionLabel: { en: 'Practice English', ru: 'Практиковать English' },
        feedbackLabel: { en: '+3 English', ru: '+3 English' },
        feedbackColor: REMOTE_JOB_HUNTER_SCENE_COLORS.cyan.hex,
        actionType: 'practice-english',
        x: 820,
        y: 370,
        color: REMOTE_JOB_HUNTER_SCENE_COLORS.english,
      },
      {
        id: 'coffee-break',
        label: { en: 'Coffee Break', ru: 'Кофе-пауза' },
        actionLabel: { en: 'Restore Energy', ru: 'Восстановить энергию' },
        feedbackLabel: { en: '+Energy', ru: '+Энергия' },
        feedbackColor: REMOTE_JOB_HUNTER_SCENE_COLORS.amber,
        actionType: 'coffee-break',
        x: 500,
        y: 440,
        color: REMOTE_JOB_HUNTER_SCENE_COLORS.coffee,
      },
    ],
  },
  interaction: {
    keyText: 'E',
    panelTitle: {
      en: 'Interaction',
      ru: 'Действие',
    },
    noActiveZone: {
      en: 'No active zone',
      ru: 'Нет активной зоны',
    },
    moveCloser: {
      en: 'Move closer to a desk',
      ru: 'Подойдите ближе к столу',
    },
    needRest: {
      en: 'Need rest',
      ru: 'Нужно отдохнуть',
    },
    hintFontSize: '14px',
    keyBoxSize: 24,
    feedbackFontSize: '14px',
    feedbackDuration: 900,
    cooldownMs: 700,
    panel: {
      x: 675,
      y: 30,
      width: 520,
      height: 34,
    },
  },
};
