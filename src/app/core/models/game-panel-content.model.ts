export interface GamePanelContent {
  label: string;
  title: string;
  description: string;
  needRest: string;
  totalSkill: string;

  stats: {
    level: string;
    money: string;
    energy: string;
    motivation: string;
    currentJob: string;
    openToWork: string;
  };

  skills: {
    angular: string;
    typescript: string;
    rxjs: string;
    english: string;
  };

  actions: {
    learnAngular: string;
    learnTypescript: string;
    practiceRxjs: string;
    learnEnglish: string;
    rest: string;
    reset: string;
  };
}
