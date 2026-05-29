export interface ResumeProject {
  title: string;
  description: string;
  responsibilities: string[];
  stack: string[];
}

export interface ResumeExperience {
  id: string;
  period: string;
  company: string;
  role?: string;
  summary: string;
  highlights?: string[];
  projects: ResumeProject[];
}

export interface ResumeInfoItem {
  title: string;
  description: string;
}

export interface ResumeContent {
  title: string;
  subtitle: string;
  description: string;
  downloadLabel: string;
  downloadUrl: string;
  experienceTitle: string;
  educationTitle: string;
  languagesTitle: string;
  readMore: string;
  collapse: string;
  experience: ResumeExperience[];
  education: ResumeInfoItem[];
  languages: ResumeInfoItem[];
}
