export type OfficeActionType = 'study-angular' | 'practice-rxjs' | 'coffee-break';

export interface OfficeZone {
  id: string;
  label: string;
  actionLabel: string;
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
    playerArea: {
      left: number;
      right: number;
    };
  };
  colors: {
    title: string;
    text: string;
    player: number;
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
    interactionHintGap: number;
    furnitureWallPadding: number;
    items: OfficeZone[];
  };
  interaction: {
    distance: number;
    hintText: string;
    hintFontSize: string;
  };
}
