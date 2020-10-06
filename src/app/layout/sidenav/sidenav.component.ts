import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';
import { isPlatformBrowser } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() sidenavElement: MatSidenav;
  @Input() isDesktopScreen: boolean;

  isDarkTheme: boolean;

  links = [
    { text: 'HOME', url: '/home' },
    { text: 'EDUCATION', url: '/education' },
    { text: 'WORK EXPERIENCE', url: '/work-experience' },
    { text: 'PROJECTS', url: '/projects' },
    { text: 'ABOUT ME', url: '/about-me' },
    { text: 'CONTACT', url: '/contact' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private themeService: ThemeService,
    public translate: TranslateService,
    private library: FaIconLibrary
  ) {
    this.library.addIcons(faAdjust);
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDark;
  }

  closeIfIsMobile() {
    if (!this.isDesktopScreen) {
      this.sidenavElement.close();
    }
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
    this.isDarkTheme = !this.isDarkTheme;
  }
}
