import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../../core/material/material.module';
import { WorkExperienceComponent } from './work-experience.component';
import { WorkExperienceCardComponent } from './components/work-experience-card/work-experience-card.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: WorkExperienceComponent
  }
];

@NgModule({
  declarations: [
    WorkExperienceComponent,
    WorkExperienceCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkExperienceModule { }
