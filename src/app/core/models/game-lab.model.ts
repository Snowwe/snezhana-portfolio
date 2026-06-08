export interface GameLabRoadmapItem {
  title: string;
  description: string;
  status: 'done' | 'current' | 'planned';
}

export interface GameLabJournalItem {
  day: string;
  title: string;
  description: string;
}

export interface GameLabContent {
  label: string;
  title: string;
  description: string;
  playTab: string;
  devDiaryTab: string;
  currentProjectTitle: string;
  currentProjectItems: string[];
  mvpTitle: string;
  mvpName: string;
  mvpDescription: string;
  roadmapTitle: string;
  roadmap: GameLabRoadmapItem[];
  journalTitle: string;
  journal: GameLabJournalItem[];
}

export type GameLabTab = 'play' | 'dev-diary';
