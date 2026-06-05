import Phaser from 'phaser';

export class RemoteJobHunterScene extends Phaser.Scene {
  constructor() {
    super('remote-job-hunter');
  }

  create(): void {
    this.add.text(24, 24, 'Remote Job Hunter', {
      color: '#22d3ee',
      fontSize: '28px',
    });

    this.add.rectangle(150, 250, 40, 40, 0x22d3ee);

    this.add.text(120, 290, 'Player', {
      color: '#ffffff',
    });
  }
}
