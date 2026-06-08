import Phaser from 'phaser';

import { REMOTE_JOB_HUNTER_SCENE } from '@features/remote-job-hunter/phaser/constants/remote-job-hunter-scene.constants';
import { OfficeZone } from '@features/remote-job-hunter/phaser/models/office-zone.model';

export class RemoteJobHunterScene extends Phaser.Scene {
  private readonly config = REMOTE_JOB_HUNTER_SCENE;

  private player!: Phaser.GameObjects.Rectangle;
  private playerLabel!: Phaser.GameObjects.Text;
  private interactionHint!: Phaser.GameObjects.Text;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  private wasd!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };

  private zoneObjects: {
    config: OfficeZone;
    object: Phaser.GameObjects.Rectangle;
  }[] = [];

  constructor() {
    super('remote-job-hunter');
  }

  create(): void {
    this.createTitle();
    this.createZones();
    this.createPlayer();
    this.createInteractionHint();
    this.createKeyboardControls();
  }

  override update(): void {
    this.movePlayer();
    this.clampPlayerPosition();
    this.updatePlayerLabelPosition();
    this.updateInteractionHint();
  }

  private createTitle(): void {
    this.add.text(this.config.layout.padding, this.config.layout.padding, this.config.title.text, {
      color: this.config.colors.title,
      fontSize: this.config.title.fontSize,
    });
  }

  private createZones(): void {
    this.zoneObjects = this.config.zones.items.map((zone) => ({
      config: zone,
      object: this.createZone(zone),
    }));
  }

  private createZone(zone: OfficeZone): Phaser.GameObjects.Rectangle {
    const zoneObject = this.add.rectangle(
      zone.x,
      zone.y,
      this.config.zones.width,
      this.config.zones.height,
      zone.color,
      this.config.zones.opacity,
    );

    this.add
      .text(zone.x, zone.y, zone.label, {
        color: this.config.colors.text,
        fontSize: this.config.zones.labelFontSize,
        fontStyle: 'bold',
        align: 'center',
      })
      .setOrigin(0.5);

    return zoneObject;
  }

  private createPlayer(): void {
    this.player = this.add.rectangle(
      this.config.player.startPosition.x,
      this.config.player.startPosition.y,
      this.config.player.size,
      this.config.player.size,
      this.config.colors.player,
    );

    this.playerLabel = this.add.text(0, 0, this.config.player.label, {
      color: this.config.colors.text,
      fontSize: this.config.player.labelFontSize,
    });

    this.updatePlayerLabelPosition();
  }

  private createInteractionHint(): void {
    this.interactionHint = this.add
      .text(0, 0, '', {
        color: this.config.colors.title,
        fontSize: this.config.interaction.hintFontSize,
        fontStyle: 'bold',
      })
      .setOrigin(0, 0)
      .setVisible(false);
  }

  private createKeyboardControls(): void {
    this.cursors = this.input.keyboard!.createCursorKeys();

    this.wasd = this.input.keyboard!.addKeys('W,A,S,D') as {
      W: Phaser.Input.Keyboard.Key;
      A: Phaser.Input.Keyboard.Key;
      S: Phaser.Input.Keyboard.Key;
      D: Phaser.Input.Keyboard.Key;
    };
  }

  private movePlayer(): void {
    const { dx, dy } = this.getMovementDirection();

    const nextX = this.player.x + dx * this.config.player.speed;
    const nextY = this.player.y + dy * this.config.player.speed;

    this.player.x = nextX;
    this.player.y = nextY;
  }

  private getMovementDirection(): { dx: number; dy: number } {
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

    return { dx, dy };
  }

  private updateInteractionHint(): void {
    const activeZone = this.findActiveZone();

    if (!activeZone) {
      this.interactionHint.setVisible(false);
      return;
    }

    this.interactionHint.setText(
      `${this.config.interaction.hintText}: ${activeZone.config.actionLabel}`,
    );

    const hintX = Phaser.Math.Clamp(
      this.player.x -
        this.config.player.size / 2 -
        this.config.zones.interactionHintGap -
        this.interactionHint.width,
      this.config.layout.playerArea.left,
      this.config.layout.playerArea.right - this.interactionHint.width,
    );

    const hintY = Phaser.Math.Clamp(
      this.player.y - this.interactionHint.height / 2,
      this.config.layout.headerHeight + this.config.layout.padding,
      this.config.size.height - this.config.layout.padding - this.interactionHint.height,
    );

    this.interactionHint.setPosition(hintX, hintY).setVisible(true);
  }

  private findActiveZone():
    | {
        config: OfficeZone;
        object: Phaser.GameObjects.Rectangle;
      }
    | undefined {
    return this.zoneObjects.find((zone) => {
      const distance = Phaser.Math.Distance.Between(
        this.player.x,
        this.player.y,
        zone.object.x,
        zone.object.y,
      );

      return distance <= this.config.interaction.distance;
    });
  }

  private clampPlayerPosition(): void {
    const halfPlayer = this.config.player.size / 2;

    const minX = this.config.layout.playerArea.left + halfPlayer;
    const maxX = this.config.layout.playerArea.right - halfPlayer;

    const minY =
      this.config.layout.headerHeight +
      this.config.layout.padding +
      this.config.player.labelGap +
      this.playerLabel.height +
      halfPlayer;

    const maxY = this.config.size.height - this.config.layout.padding - halfPlayer;

    this.player.x = Phaser.Math.Clamp(this.player.x, minX, maxX);
    this.player.y = Phaser.Math.Clamp(this.player.y, minY, maxY);
  }

  private updatePlayerLabelPosition(): void {
    const labelX = Phaser.Math.Clamp(
      this.player.x - this.playerLabel.width / 2,
      this.config.layout.playerArea.left,
      this.config.layout.playerArea.right - this.playerLabel.width,
    );

    const labelY =
      this.player.y -
      this.config.player.size / 2 -
      this.config.player.labelGap -
      this.playerLabel.height;

    this.playerLabel.setPosition(labelX, labelY);
  }
}
