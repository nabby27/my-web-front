import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialNetwork } from 'src/app/shared/models/social-network';
import { TranslateService } from '@ngx-translate/core';
import { aboutMeSocialNetworks } from './constants';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  socialNetworks: SocialNetwork[] = aboutMeSocialNetworks;

  constructor(private library: FaIconLibrary, public translate: TranslateService) {
    this.library.addIcons(faLinkedin, faInstagram, faTwitter);
  }
}
