import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, AbstractControl, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { ContactForm } from '../../models/contact-form';
import { MailService } from 'src/app/services/mail.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-contact-form-card',
  templateUrl: './contact-form-card.component.html',
  styleUrls: ['./contact-form-card.component.scss'],
})
export class ContactFormCardComponent implements OnInit, OnDestroy {
  isMailBeenSended = false;
  sendMailSubscription: Subscription;

  contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    sum: ['', [Validators.required, this.correctSum.bind(this)]],
    message: ['', [Validators.required]],
  });

  num1ToSum: number;
  num2ToSum: number;

  constructor(
    public translate: TranslateService,
    private fb: FormBuilder,
    private mailService: MailService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.randomNumberToSum();
  }

  ngOnDestroy() {
    if (this.sendMailSubscription) {
      this.sendMailSubscription.unsubscribe();
    }
  }

  randomNumberToSum() {
    this.num1ToSum = Math.floor(Math.random() * 6);
    this.num2ToSum = Math.floor(Math.random() * 6);
  }

  correctSum(control: AbstractControl): { [key: string]: any } | null {
    return this.num1ToSum + this.num2ToSum === control.value ? null : { correctSum: true };
  }

  sendMail(contactFormDirective: FormGroupDirective) {
    const data: ContactForm = this.contactForm.value;
    this.isMailBeenSended = true;
    this.sendMailSubscription = this.mailService.sendMail(data).subscribe(
      () => {
        this.openSnackBar('SUCCESS_SEND_MAIL', true);
      },
      () => {
        this.openSnackBar('ERROR_SEND_MAIL', false);
      }
    );
    this.contactForm.reset();
    contactFormDirective.resetForm();
    this.randomNumberToSum();
  }

  private openSnackBar(message: string, success: boolean) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 7000,
      data: {
        message: message,
        success,
      },
    });
    this.isMailBeenSended = false;
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get sum() {
    return this.contactForm.get('sum');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
