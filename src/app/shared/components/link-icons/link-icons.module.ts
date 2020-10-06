import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinkIconsComponent } from './link-icons.component';

@NgModule({
  declarations: [LinkIconsComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LinkIconsComponent],
})
export class LinkIconsModule {}
