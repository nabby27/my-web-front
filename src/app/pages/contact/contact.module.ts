import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../../core/material/material.module';
import { ContactComponent } from './contact.component';
import { ContactInfoCardComponent } from './components/contact-info-card/contact-info-card.component';
import { ContactFormCardComponent } from './components/contact-form-card/contact-form-card.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    ContactComponent,
    ContactInfoCardComponent,
    ContactFormCardComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactModule { }
