import { RemoteJobHunterSceneConfig } from '@features/remote-job-hunter/phaser/models/office-zone.model';

export const REMOTE_JOB_HUNTER_SCENE: RemoteJobHunterSceneConfig = {
  size: {
    width: 1000,
    height: 500,
  },
  layout: {
    padding: 16,
    headerHeight: 44,
    playerArea: {
      left: 16,
      right: 844,
    },
  },
  colors: {
    title: '#22d3ee',
    text: '#ffffff',
    player: 0x22d3ee,
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
    startPosition: {
      x: 150,
      y: 250,
    },
    labelFontSize: '14px',
  },
  zones: {
    width: 120,
    height: 70,
    opacity: 0.85,
    labelFontSize: '13px',
    collisionPadding: 6,
    interactionHintGap: 14,
    furnitureWallPadding: 18,
    items: [
      {
        id: 'angular-desk',
        label: 'Angular Desk',
        actionLabel: 'Study Angular',
        actionType: 'study-angular',
        x: 924,
        y: 130,
        color: 0xdd0031,
      },
      {
        id: 'rxjs-shelf',
        label: 'RxJS Shelf',
        actionLabel: 'Practice RxJS',
        actionType: 'practice-rxjs',
        x: 924,
        y: 240,
        color: 0xb7178c,
      },
      {
        id: 'coffee-break',
        label: 'Coffee Break',
        actionLabel: 'Rest',
        actionType: 'coffee-break',
        x: 924,
        y: 350,
        color: 0x7c4a2d,
      },
    ],
  },
  interaction: {
    distance: 100,
    hintText: 'Press E',
    hintFontSize: '14px',
  },
};
