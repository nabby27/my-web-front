import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from '../../core/material/material.module';
import { EducationComponent } from './education.component';
import { AcademicTitleCardComponent } from './components/academic-title-card/academic-title-card.component';

const routes: Routes = [
  {
    path: '',
    component: EducationComponent
  }
];

@NgModule({
  declarations: [
    EducationComponent,
    AcademicTitleCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class EducationModule { }
