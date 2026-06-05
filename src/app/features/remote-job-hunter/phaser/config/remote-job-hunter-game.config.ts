import Phaser from 'phaser';

import { RemoteJobHunterScene } from '@features/remote-job-hunter/phaser/scenes/remote-job-hunter.scene';

export const createRemoteJobHunterGameConfig = (
  parent: HTMLElement,
): Phaser.Types.Core.GameConfig => ({
  type: Phaser.AUTO,
  parent,
  width: 1000,
  height: 500,
  backgroundColor: '#0f172a',
  scene: [RemoteJobHunterScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
  },
});
