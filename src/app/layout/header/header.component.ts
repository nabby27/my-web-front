import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SocialNetwork } from 'src/app/shared/models/social-network';
import { MatSidenav } from '@angular/material/sidenav';
import { headerSocialNetworks } from 'src/app/layout/header/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() sidenavElement: MatSidenav;

  socialNetworks: SocialNetwork[] = headerSocialNetworks;

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faGithub, faStackOverflow, faBars);
  }

}
