import { Jobs } from './jobs';

export interface WorkExperience {
  company: string;
  start_date: string;
  end_date: string;
  location: string;
  jobs: Jobs[];
}
