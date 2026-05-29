export interface AppInfoItem {
  label: string;
  value: string;
}

export interface AppContent {
  label: string;
  title: string;
  position: string;
  description: string;
  infoItems: AppInfoItem[];

  about: string;
  resume: string;
  gameLab: string;
  roadmap: string;
}
