import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidenavComponent } from './sidenav.component';
import { MaterialModule } from '../../core/material/material.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FontAwesomeModule, TranslateModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
