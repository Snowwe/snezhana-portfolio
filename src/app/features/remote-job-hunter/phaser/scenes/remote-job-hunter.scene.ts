import Phaser from 'phaser';

export class RemoteJobHunterScene extends Phaser.Scene {
  private readonly sceneWidth = 1000;
  private readonly sceneHeight = 500;
  private readonly headerHeight = 44;
  private readonly playerSize = 20;
  private readonly padding = 16;
  private readonly playerLabelGap = 10;
  private readonly playerSpeed = 3;

  private player!: Phaser.GameObjects.Rectangle;
  private playerLabel!: Phaser.GameObjects.Text;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  private wasd!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };

  constructor() {
    super('remote-job-hunter');
  }

  create(): void {
    this.add.text(this.padding, this.padding, 'Remote Job Hunter', {
      color: '#22d3ee',
      fontSize: '28px',
    });

    this.player = this.add.rectangle(150, 250, this.playerSize, this.playerSize, 0x22d3ee);

    this.playerLabel = this.add.text(0, 0, 'Junior', {
      color: '#ffffff',
      fontSize: '14px',
    });

    this.updatePlayerLabelPosition();

    this.cursors = this.input.keyboard!.createCursorKeys();

    this.wasd = this.input.keyboard!.addKeys('W,A,S,D') as {
      W: Phaser.Input.Keyboard.Key;
      A: Phaser.Input.Keyboard.Key;
      S: Phaser.Input.Keyboard.Key;
      D: Phaser.Input.Keyboard.Key;
    };
  }

  override update(): void {
    let dx = 0;
    let dy = 0;

    if (this.wasd.A.isDown || this.cursors.left.isDown) {
      dx = -1;
    }

    if (this.wasd.D.isDown || this.cursors.right.isDown) {
      dx = 1;
    }

    if (this.wasd.W.isDown || this.cursors.up.isDown) {
      dy = -1;
    }

    if (this.wasd.S.isDown || this.cursors.down.isDown) {
      dy = 1;
    }

    this.player.x += dx * this.playerSpeed;
    this.player.y += dy * this.playerSpeed;

    this.clampPlayerPosition();
    this.updatePlayerLabelPosition();
  }

  private clampPlayerPosition(): void {
    const halfPlayer = this.playerSize / 2;

    const minX = this.padding + halfPlayer;
    const maxX = this.sceneWidth - this.padding - halfPlayer;

    const minY =
      this.headerHeight + this.padding + this.playerLabelGap + this.playerLabel.height + halfPlayer;
    const maxY = this.sceneHeight - this.padding - halfPlayer;

    this.player.x = Phaser.Math.Clamp(this.player.x, minX, maxX);
    this.player.y = Phaser.Math.Clamp(this.player.y, minY, maxY);
  }

  private updatePlayerLabelPosition(): void {
    this.playerLabel.setPosition(
      this.player.x - this.playerLabel.width / 2,
      this.player.y - this.playerSize / 2 - this.playerLabelGap - this.playerLabel.height,
    );

    const labelX = Phaser.Math.Clamp(
      this.player.x - this.playerLabel.width / 2,
      this.padding,
      this.sceneWidth - this.padding - this.playerLabel.width,
    );

    this.playerLabel.setX(labelX);
  }
}
