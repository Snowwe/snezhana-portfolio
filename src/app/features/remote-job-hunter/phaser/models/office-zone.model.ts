import Phaser from 'phaser';

export type OfficeActionType =
  | 'study-angular'
  | 'practice-typescript'
  | 'practice-rxjs'
  | 'practice-english'
  | 'coffee-break';

export interface OfficeZoneObject {
  config: OfficeZone;
  object: Phaser.GameObjects.Rectangle;
}

export interface OfficeZone {
  id: string;
  label: string;
  actionLabel: string;
  feedbackLabel: string;
  feedbackColor: number;
  actionType: OfficeActionType;
  x: number;
  y: number;
  color: number;
}

export interface RemoteJobHunterSceneConfig {
  size: {
    width: number;
    height: number;
  };
  layout: {
    padding: number;
    headerHeight: number;
  };
  colors: {
    title: string;
    text: string;
    player: number;
    interactionKeyText: string;
    interactionKeyBorder: number;
    interactionKeyFill: number;
    interactionPanelBackground: number;
    interactionPanelBorder: number;
  };
  title: {
    text: string;
    fontSize: string;
  };
  player: {
    label: string;
    size: number;
    speed: number;
    labelGap: number;
    labelOffsetX: number;
    startPosition: {
      x: number;
      y: number;
    };
    labelFontSize: string;
  };
  zones: {
    width: number;
    height: number;
    opacity: number;
    labelFontSize: string;
    collisionPadding: number;
    interactionPadding: number;
    interactionHintGap: number;
    items: OfficeZone[];
  };
  interaction: {
    keyText: string;
    panelTitle: string;
    hintFontSize: string;
    keyBoxSize: number;
    feedbackFontSize: string;
    feedbackDuration: number;
    cooldownMs: number;
    panel: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
}
