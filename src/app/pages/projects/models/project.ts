import { Owner } from './owner';

export interface Project {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  html_url: string;
  description: string;
  created_at?: string;
  updated_at?: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
}
