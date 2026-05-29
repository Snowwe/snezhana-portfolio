export interface AboutHighlight {
  title: string;
  description: string;
}

export interface AboutBuildItem {
  title: string;
  description: string;
}

export interface AboutContent {
  label: string;
  title: string;
  intro: string[];
  focusTitle: string;
  focusItems: string[];
  highlightsTitle: string;
  highlights: AboutHighlight[];
  buildTitle: string;
  buildItems: AboutBuildItem[];
}
