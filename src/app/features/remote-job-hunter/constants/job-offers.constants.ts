import { JobOffer } from '../models/job-offer.model';

export const JOB_OFFERS: JobOffer[] = [
  {
    id: 'junior-angular',
    company: 'StartupHub',
    position: 'Junior Angular Developer',
    salary: 1200,
    requiredAngular: 20,
    requiredTypescript: 20,
    requiredRxjs: 10,
    requiredEnglish: 20,
  },
  {
    id: 'middle-angular',
    company: 'RemoteSoft',
    position: 'Middle Angular Developer',
    salary: 3000,
    requiredAngular: 50,
    requiredTypescript: 50,
    requiredRxjs: 40,
    requiredEnglish: 40,
  },
  {
    id: 'senior-angular',
    company: 'FinTech Labs',
    position: 'Senior Angular Developer',
    salary: 5000,
    requiredAngular: 80,
    requiredTypescript: 80,
    requiredRxjs: 70,
    requiredEnglish: 60,
  },
];
