import { RemoteJobHunterSceneConfig } from '@features/remote-job-hunter/phaser/models/office-zone.model';

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
    title: '#22d3ee',
    text: '#ffffff',
    player: 0x22d3ee,

    interactionKeyText: '#0f172a',
    interactionKeyFill: 0x22d3ee,
    interactionKeyBorder: 0xffffff,

    interactionPanelBackground: 0x0f172a,
    interactionPanelBorder: 0x22d3ee,
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
        label: 'Angular Desk',
        actionLabel: 'Study Angular',
        actionType: 'study-angular',
        x: 140,
        y: 160,
        color: 0xdd0031,
      },
      {
        id: 'ts-shelf',
        label: 'TS Shelf',
        actionLabel: 'Practice TypeScript',
        actionType: 'practice-typescript',
        x: 820,
        y: 190,
        color: 0x3178c6,
      },
      {
        id: 'rxjs-shelf',
        label: 'RxJS Shelf',
        actionLabel: 'Practice RxJS',
        actionType: 'practice-rxjs',
        x: 140,
        y: 340,
        color: 0xb7178c,
      },
      {
        id: 'english-book',
        label: 'English Book',
        actionLabel: 'Practice English',
        actionType: 'practice-english',
        x: 820,
        y: 370,
        color: 0x16a34a,
      },
      {
        id: 'coffee-break',
        label: 'Coffee Break',
        actionLabel: 'Restore Energy',
        actionType: 'coffee-break',
        x: 500,
        y: 440,
        color: 0x7c4a2d,
      },
    ],
  },
  interaction: {
    keyText: 'E',
    panelTitle: 'Interaction',
    hintFontSize: '14px',
    keyBoxSize: 24,
    panel: {
      x: 675,
      y: 30,
      width: 520,
      height: 34,
    },
  },
};
