import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-info-card',
  templateUrl: './contact-info-card.component.html',
  styleUrls: ['./contact-info-card.component.scss']
})
export class ContactInfoCardComponent {

  constructor(
    public translate: TranslateService,
  ) {}

}
