import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GithubService } from 'src/app/services/github.service';
import { Subscription } from 'rxjs';
import { Project } from './models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  githubUsername: string;
  githubRepositories: Project[];
  numberOfGithubRepositories: number;
  getProejctsSubscription: Subscription;

  constructor(
    public translate: TranslateService,
    private githubService: GithubService,
  ) {}

  ngOnInit() {
    this.githubUsername = this.githubService.USER;

    this.getProejctsSubscription = this.githubService.getProjects().subscribe(
      (response: Project[]) => {
        this.githubRepositories = response;
        this.countRepositories();
      }
    );
  }

  ngOnDestroy() {
    this.getProejctsSubscription.unsubscribe();
  }

  countRepositories = () => {
    this.numberOfGithubRepositories = 0;
    const interval = setInterval(() => {
      this.numberOfGithubRepositories++;
      if (this.numberOfGithubRepositories === this.githubRepositories.length) {
        clearInterval(interval);
      }
    }, 2000 / this.githubRepositories.length);
  }

}
