import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { CacheService } from 'src/app/services/cache.service';
import { Project } from '../pages/projects/models/project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly URL = 'https://api.github.com';
  readonly USER = 'nabby27';

  constructor(
    private http: HttpClient,
    private cacheService: CacheService
  ) { }

  getProjects(): Observable<Project[]> {
    const projects = this.cacheService.getItemToCache('github_projects');
    if (projects) {
      return of(projects);
    }

    return this.getProjectsFromAPI();
  }

  private getProjectsFromAPI(): Observable<Project[]> {
    return this.http.get(`${this.URL}/users/${this.USER}/repos`).pipe(map((response: Project[]) => {
      this.cacheService.addItemToCache('github_projects', response);
      return response;
    }));
  }

}
