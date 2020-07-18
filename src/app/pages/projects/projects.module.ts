import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '../../core/material/material.module';
import { GithubCardComponent } from './components/github-card/github-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];

@NgModule({
  declarations: [
    ProjectsComponent,
    GithubCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsModule { }
