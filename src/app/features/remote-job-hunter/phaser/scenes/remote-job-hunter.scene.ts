import Phaser from 'phaser';

import { REMOTE_JOB_HUNTER_SCENE } from '@features/remote-job-hunter/phaser/constants/remote-job-hunter-scene.constants';
import { OfficeZone } from '@features/remote-job-hunter/phaser/models/office-zone.model';

export class RemoteJobHunterScene extends Phaser.Scene {
  private readonly config = REMOTE_JOB_HUNTER_SCENE;

  private player!: Phaser.GameObjects.Rectangle;
  private playerLabel!: Phaser.GameObjects.Text;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private interactionKeyBox!: Phaser.GameObjects.Rectangle;
  private interactionKeyText!: Phaser.GameObjects.Text;
  private interactionPanel!: Phaser.GameObjects.Container;
  private interactionPanelBackground!: Phaser.GameObjects.Rectangle;
  private interactionPanelTitle!: Phaser.GameObjects.Text;
  private interactionPanelZoneTitle!: Phaser.GameObjects.Text;
  private interactionPanelAction!: Phaser.GameObjects.Text;
  private interactKey!: Phaser.Input.Keyboard.Key;
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
    // this.createInteractionHint();
    this.createInteractionKeyHint();
    this.createInteractionPanel();
    this.createKeyboardControls();
  }

  override update(): void {
    this.movePlayer();
    this.clampPlayerPosition();
    this.updatePlayerLabelPosition();
    this.updateInteractionHint();
    this.handleInteraction();
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

  private createInteractionKeyHint(): void {
    this.interactionKeyBox = this.add
      .rectangle(
        0,
        0,
        this.config.interaction.keyBoxSize,
        this.config.interaction.keyBoxSize,
        this.config.colors.interactionKeyFill,
        0.95,
      )
      .setStrokeStyle(1, this.config.colors.interactionKeyBorder, 0.9)
      .setVisible(false);

    this.interactionKeyText = this.add
      .text(0, 0, this.config.interaction.keyText, {
        color: this.config.colors.interactionKeyText,
        fontSize: this.config.interaction.hintFontSize,
        fontStyle: 'bold',
      })
      .setOrigin(0.5)
      .setVisible(false);
  }

  private createInteractionPanel(): void {
    const panel = this.config.interaction.panel;

    this.interactionPanelBackground = this.add.rectangle(
      panel.x,
      panel.y,
      panel.width,
      panel.height,
      this.config.colors.interactionPanelBackground,
      0.92,
    );

    this.interactionPanelBackground.setStrokeStyle(
      1,
      this.config.colors.interactionPanelBorder,
      0.45,
    );

    const leftX = panel.x - panel.width / 2 + 18;
    const middleX = panel.x - 30;
    const rightX = panel.x + panel.width / 2 - 18;
    const textY = panel.y - 7;

    this.interactionPanelTitle = this.add.text(leftX, textY, this.config.interaction.panelTitle, {
      color: this.config.colors.title,
      fontSize: '12px',
      fontStyle: 'bold',
    });

    this.interactionPanelZoneTitle = this.add
      .text(middleX, textY, '', {
        color: this.config.colors.text,
        fontSize: '12px',
        fontStyle: 'bold',
      })
      .setOrigin(0.5, 0);

    this.interactionPanelAction = this.add
      .text(rightX, textY, '', {
        color: this.config.colors.title,
        fontSize: '12px',
        fontStyle: 'bold',
      })
      .setOrigin(1, 0);

    this.interactionPanel = this.add.container(0, 0, [
      this.interactionPanelBackground,
      this.interactionPanelTitle,
      this.interactionPanelZoneTitle,
      this.interactionPanelAction,
    ]);

    this.interactionPanel.setVisible(true);
  }

  private createKeyboardControls(): void {
    this.cursors = this.input.keyboard!.createCursorKeys();

    this.wasd = this.input.keyboard!.addKeys('W,A,S,D') as {
      W: Phaser.Input.Keyboard.Key;
      A: Phaser.Input.Keyboard.Key;
      S: Phaser.Input.Keyboard.Key;
      D: Phaser.Input.Keyboard.Key;
    };
    this.interactKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.E);
  }

  private movePlayer(): void {
    const { dx, dy } = this.getMovementDirection();

    const nextX = this.player.x + dx * this.config.player.speed;
    const nextY = this.player.y + dy * this.config.player.speed;

    if (!this.isPlayerPositionBlocked(nextX, this.player.y)) {
      this.player.x = nextX;
    }

    if (!this.isPlayerPositionBlocked(this.player.x, nextY)) {
      this.player.y = nextY;
    }
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
      this.interactionKeyBox.setVisible(false);
      this.interactionKeyText.setVisible(false);

      this.interactionPanelZoneTitle.setText('No active zone');
      this.interactionPanelAction.setText('Move closer to a desk');
      return;
    }

    const keyX = this.player.x;
    const keyY = this.player.y;

    this.interactionKeyBox.setPosition(keyX, keyY).setVisible(true);
    this.interactionKeyText.setPosition(keyX, keyY).setVisible(true);

    this.interactionPanelZoneTitle.setText(activeZone.config.label);
    this.interactionPanelAction.setText(activeZone.config.actionLabel);
  }

  private findActiveZone():
    | {
        config: OfficeZone;
        object: Phaser.GameObjects.Rectangle;
      }
    | undefined {
    const playerBounds = this.getPlayerBounds(this.player.x, this.player.y);

    return this.zoneObjects.find((zone) => {
      const zoneBounds = zone.object.getBounds();

      const interactionBounds = new Phaser.Geom.Rectangle(
        zoneBounds.x - this.config.zones.interactionPadding,
        zoneBounds.y - this.config.zones.interactionPadding,
        zoneBounds.width + this.config.zones.interactionPadding * 2,
        zoneBounds.height + this.config.zones.interactionPadding * 2,
      );

      return Phaser.Geom.Intersects.RectangleToRectangle(playerBounds, interactionBounds);
    });
  }

  private clampPlayerPosition(): void {
    const halfPlayer = this.config.player.size / 2;

    const minX = this.config.layout.padding + halfPlayer;
    const maxX = this.config.size.width - this.config.layout.padding - halfPlayer;

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
      this.config.layout.padding,
      this.config.size.width - this.config.layout.padding - this.playerLabel.width,
    );

    const labelY =
      this.player.y -
      this.config.player.size / 2 -
      this.config.player.labelGap -
      this.playerLabel.height;

    this.playerLabel.setPosition(labelX, labelY);
  }

  private isPlayerPositionBlocked(x: number, y: number): boolean {
    const playerBounds = this.getPlayerBounds(x, y);

    return this.zoneObjects.some((zone) => {
      const zoneBounds = zone.object.getBounds();

      const expandedZoneBounds = new Phaser.Geom.Rectangle(
        zoneBounds.x - this.config.zones.collisionPadding,
        zoneBounds.y - this.config.zones.collisionPadding,
        zoneBounds.width + this.config.zones.collisionPadding * 2,
        zoneBounds.height + this.config.zones.collisionPadding * 2,
      );

      return Phaser.Geom.Intersects.RectangleToRectangle(playerBounds, expandedZoneBounds);
    });
  }

  private getPlayerBounds(x: number, y: number): Phaser.Geom.Rectangle {
    const halfPlayer = this.config.player.size / 2;

    return new Phaser.Geom.Rectangle(
      x - halfPlayer,
      y - halfPlayer,
      this.config.player.size,
      this.config.player.size,
    );
  }

  private handleInteraction(): void {
    if (!Phaser.Input.Keyboard.JustDown(this.interactKey)) {
      return;
    }

    const activeZone = this.findActiveZone();

    if (!activeZone) {
      return;
    }

    switch (activeZone.config.actionType) {
      case 'study-angular':
        console.log('Study Angular');
        break;
      case 'practice-typescript':
        console.log('Practice TypeScript');
        break;
      case 'practice-rxjs':
        console.log('Practice RxJS');
        break;
      case 'practice-english':
        console.log('Practice English');
        break;
      case 'coffee-break':
        console.log('Restore Energy');
        break;
    }
  }
}
