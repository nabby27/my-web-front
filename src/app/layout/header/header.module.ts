import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header.component';
import { LinkIconsModule } from '../../shared/components/link-icons/link-icons.module';
import { MaterialModule } from '../../core/material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FontAwesomeModule, LinkIconsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
