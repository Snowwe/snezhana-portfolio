import { JobOffer } from '@features/remote-job-hunter/models/job-offer.model';

export const JOB_OFFERS: JobOffer[] = [
  {
    id: 'junior-angular',
    company: 'StartupHub',
    position: 'Junior Angular Developer',
    salary: 1200,
    interviewLevel: 1,
    requirements: [
      { skill: 'angular', value: 20 },
      { skill: 'typescript', value: 20 },
      { skill: 'rxjs', value: 10 },
      { skill: 'english', value: 20 },
    ],
  },
  {
    id: 'middle-angular',
    company: 'RemoteSoft',
    position: 'Middle Angular Developer',
    salary: 3000,
    interviewLevel: 2,
    requirements: [
      { skill: 'angular', value: 50 },
      { skill: 'typescript', value: 50 },
      { skill: 'rxjs', value: 40 },
      { skill: 'english', value: 40 },
    ],
  },
  {
    id: 'senior-angular',
    company: 'FinTech Labs',
    position: 'Senior Angular Developer',
    salary: 5000,
    interviewLevel: 3,
    requirements: [
      { skill: 'angular', value: 80 },
      { skill: 'typescript', value: 80 },
      { skill: 'rxjs', value: 70 },
      { skill: 'english', value: 60 },
    ],
  },
];
