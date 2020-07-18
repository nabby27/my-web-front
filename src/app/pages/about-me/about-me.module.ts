import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AboutMeComponent } from './about-me.component';
import { LinkIconsModule } from '../../shared/components/link-icons/link-icons.module';
import { MaterialModule } from '../../core/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent
  }
];

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    LinkIconsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutMeModule { }
