export interface JobRequirement {
  skill: 'angular' | 'typescript' | 'rxjs' | 'english';
  value: number;
}

export interface JobOffer {
  id: string;
  company: string;
  position: string;
  salary: number;
  requirements: JobRequirement[];
}
