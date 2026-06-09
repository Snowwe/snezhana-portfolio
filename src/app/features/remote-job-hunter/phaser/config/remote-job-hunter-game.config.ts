import Phaser from 'phaser';

import { GameStateService } from '@features/remote-job-hunter/services/game-state.service';
import { RemoteJobHunterScene } from '../scenes/remote-job-hunter.scene';

export const createRemoteJobHunterGameConfig = (
  parent: HTMLElement,
  gameStateService: GameStateService,
): Phaser.Types.Core.GameConfig => ({
  type: Phaser.AUTO,
  parent,
  width: 1000,
  height: 500,
  backgroundColor: '#0f172a',
  scene: [new RemoteJobHunterScene(gameStateService)],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
  },
});
