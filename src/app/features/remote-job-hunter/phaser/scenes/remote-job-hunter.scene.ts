import Phaser from 'phaser';

import { REMOTE_JOB_HUNTER_SCENE } from '@features/remote-job-hunter/phaser/constants/remote-job-hunter-scene.constants';
import {
  OfficeText,
  OfficeZone,
  OfficeZoneObject,
} from '@features/remote-job-hunter/phaser/models/office-zone.model';

import { GameStateService } from '@features/remote-job-hunter/services/game-state.service';
import { LanguageService } from '@core/services/language';
import { Language } from '@core/models/language.model';

export class RemoteJobHunterScene extends Phaser.Scene {
  // Static scene configuration: layout, colors, player settings and office zones.
  private readonly config = REMOTE_JOB_HUNTER_SCENE;

  // Player objects rendered inside the Phaser scene.
  private player!: Phaser.GameObjects.Rectangle;
  private playerLabel!: Phaser.GameObjects.Text;

  // Keyboard controls for movement and interaction.
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private interactKey!: Phaser.Input.Keyboard.Key;
  private interactKeyRu!: Phaser.Input.Keyboard.Key;
  private wasd!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };

  // Interaction UI: key indicator displayed on the player and top info panel.
  private interactionKeyBox!: Phaser.GameObjects.Rectangle;
  private interactionKeyText!: Phaser.GameObjects.Text;
  private interactionPanelZoneTitle!: Phaser.GameObjects.Text;
  private interactionPanelAction!: Phaser.GameObjects.Text;
  private activeZoneId: string | null = null;
  private actionFeedbackText!: Phaser.GameObjects.Text;
  private lastInteractionAt = 0;
  private activeLanguage!: Language;
  private interactionPanelTitle!: Phaser.GameObjects.Text;

  // Office zones with their visual rectangle and action config.
  private zoneObjects: OfficeZoneObject[] = [];

  constructor(
    private readonly gameStateService: GameStateService,
    private readonly languageService: LanguageService,
  ) {
    super('remote-job-hunter');
  }

  // Phaser lifecycle: creates all static and interactive scene objects.
  create(): void {
    this.activeLanguage = this.languageService.language();

    this.createTitle();
    this.createZones();
    this.createPlayer();
    this.createInteractionKeyHint();
    this.createInteractionPanel();
    this.createActionFeedback();
    this.createKeyboardControls();
  }

  // Phaser lifecycle: runs on every frame and updates movement, labels and interactions.
  override update(): void {
    this.movePlayer();
    this.clampPlayerPosition();
    this.updatePlayerLabelPosition();
    this.updateLanguageContent();
    this.updateInteractionUi();
    this.handleInteraction();
  }

  private createTitle(): void {
    this.add.text(this.config.layout.padding, this.config.layout.padding, this.config.title.text, {
      color: this.config.colors.title,
      fontSize: this.config.title.fontSize,
    });
  }

  // Creates all office zones from config.
  private createZones(): void {
    this.zoneObjects = this.config.zones.items.map((zone) => this.createZone(zone));
  }

  // Creates one interactive office zone and its centered label.
  private createZone(zone: OfficeZone): OfficeZoneObject {
    const zoneObject = this.add.rectangle(
      zone.x,
      zone.y,
      this.config.zones.width,
      this.config.zones.height,
      zone.color,
      this.config.zones.opacity,
    );

    const zoneLabel = this.add
      .text(zone.x, zone.y, this.getText(zone.label), {
        color: this.config.colors.text,
        fontSize: this.config.zones.labelFontSize,
        fontStyle: 'bold',
        align: 'center',
      })
      .setOrigin(0.5);

    return {
      config: zone,
      object: zoneObject,
      label: zoneLabel,
    };
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

  // Creates the interaction panel at the top of the screen.
  private createInteractionPanel(): void {
    const panel = this.config.interaction.panel;
    const interactionPanelBackground = this.add.rectangle(
      panel.x,
      panel.y,
      panel.width,
      panel.height,
      this.config.colors.interactionPanelBackground,
      0.92,
    );

    interactionPanelBackground.setStrokeStyle(1, this.config.colors.interactionPanelBorder, 0.45);

    const leftX = panel.x - panel.width / 2 + 18;
    const middleX = panel.x - 30;
    const rightX = panel.x + panel.width / 2 - 18;
    const textY = panel.y - 7;

    this.interactionPanelTitle = this.add.text(
      leftX,
      textY,
      this.getText(this.config.interaction.panelTitle),
      {
        color: this.config.colors.title,
        fontSize: '12px',
        fontStyle: 'bold',
      },
    );

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

    const interactionPanel = this.add.container(0, 0, [
      interactionPanelBackground,
      this.interactionPanelTitle,
      this.interactionPanelZoneTitle,
      this.interactionPanelAction,
    ]);

    interactionPanel.setVisible(true);
  }

  // Creates the action feedback text, which appears above the player after an action.
  private createActionFeedback(): void {
    this.actionFeedbackText = this.add
      .text(0, 0, '', {
        color: this.config.colors.title,
        fontSize: this.config.interaction.feedbackFontSize,
        fontStyle: 'bold',
      })
      .setOrigin(0.5)
      .setVisible(false);
  }

  // Creates keyboard controls for player movement and interaction.
  private createKeyboardControls(): void {
    this.cursors = this.input.keyboard!.createCursorKeys();

    this.wasd = this.input.keyboard!.addKeys('W,A,S,D') as {
      W: Phaser.Input.Keyboard.Key;
      A: Phaser.Input.Keyboard.Key;
      S: Phaser.Input.Keyboard.Key;
      D: Phaser.Input.Keyboard.Key;
    };
    this.interactKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.interactKeyRu = this.input.keyboard!.addKey('У');
  }

  // Reads keyboard state and moves the player unless the next position is blocked.
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

  // Returns movement direction based on WASD and arrow keys.
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

  // Updates the interaction hint and panel based on the player's proximity to zones.
  private updateInteractionUi(): void {
    const activeZone = this.findActiveZone();

    if (!activeZone) {
      this.interactionKeyBox.setVisible(false);
      this.interactionKeyText.setVisible(false);

      if (this.activeZoneId !== null) {
        this.activeZoneId = null;
        this.interactionPanelZoneTitle.setText(this.getText(this.config.interaction.noActiveZone));
        this.interactionPanelAction.setText(this.getText(this.config.interaction.moveCloser));
      }

      return;
    }

    if (this.activeZoneId !== activeZone.config.id) {
      this.activeZoneId = activeZone.config.id;
      this.interactionPanelZoneTitle.setText(this.getText(activeZone.config.label));
      this.interactionPanelAction.setText(this.getText(activeZone.config.actionLabel));
    }

    const keyX = this.player.x;
    const keyY = this.player.y;

    this.interactionKeyBox.setPosition(keyX, keyY).setVisible(true);
    this.interactionKeyText.setPosition(keyX, keyY).setVisible(true);
  }

  // Checks if the player is currently overlapping with any interactive office zone.
  // Finds the first office zone whose interaction area overlaps the player.
  private findActiveZone(): OfficeZoneObject | undefined {
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

  // Keeps the player inside the scene boundaries.
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

  // Updates the player's label position to be above the player.
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

  private updateLanguageContent(): void {
    const language = this.languageService.language();

    if (this.activeLanguage === language) {
      return;
    }

    this.activeLanguage = language;

    this.zoneObjects.forEach((zone) => {
      zone.label.setText(this.getText(zone.config.label));
    });

    this.interactionPanelTitle.setText(this.getText(this.config.interaction.panelTitle));

    this.activeZoneId = null;
  }

  // Checks if the player's next position would overlap with any office zone's collision area.
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

  // Creates a rectangle representing the player's collision bounds.
  private getPlayerBounds(x: number, y: number): Phaser.Geom.Rectangle {
    const halfPlayer = this.config.player.size / 2;

    return new Phaser.Geom.Rectangle(
      x - halfPlayer,
      y - halfPlayer,
      this.config.player.size,
      this.config.player.size,
    );
  }

  // Handles E / У key press and maps office zone actions to game state changes.
  private handleInteraction(): void {
    const isInteractionKeyPressed =
      Phaser.Input.Keyboard.JustDown(this.interactKey) ||
      Phaser.Input.Keyboard.JustDown(this.interactKeyRu);

    if (!isInteractionKeyPressed || this.isInteractionOnCooldown()) {
      return;
    }

    const activeZone = this.findActiveZone();

    if (!activeZone) {
      return;
    }

    this.lastInteractionAt = this.time.now;
    this.runOfficeAction(activeZone);
  }

  private isInteractionOnCooldown(): boolean {
    return this.time.now - this.lastInteractionAt < this.config.interaction.cooldownMs;
  }

  private runOfficeAction(activeZone: OfficeZoneObject): void {
    const result = this.gameStateService.runOfficeAction(activeZone.config.actionType);

    const feedbackLabel = result.success
      ? this.getText(activeZone.config.feedbackLabel)
      : this.getText(this.config.interaction.needRest);

    this.showActionFeedback(feedbackLabel, result.feedbackColor);
  }

  private showActionFeedback(message: string, color: number): void {
    this.actionFeedbackText
      .setText(message)
      .setColor(`#${color.toString(16).padStart(6, '0')}`)
      .setPosition(this.player.x, this.player.y - 44)
      .setAlpha(1)
      .setVisible(true);

    this.tweens.killTweensOf(this.actionFeedbackText);

    this.tweens.add({
      targets: this.actionFeedbackText,
      y: this.actionFeedbackText.y - 24,
      alpha: 0,
      duration: this.config.interaction.feedbackDuration,
      ease: 'Power2',
      onComplete: () => {
        this.actionFeedbackText.setVisible(false);
      },
    });
  }

  private getText(text: OfficeText): string {
    return text[this.activeLanguage];
  }
}
