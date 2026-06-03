export interface GamePanelContent {
  label: string;
  title: string;
  description: string;

  totalSkill: string;

  stats: {
    level: string;
    money: string;
    energy: string;
    motivation: string;
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
  };
}
