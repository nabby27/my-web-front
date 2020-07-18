import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ScreenService } from './services/screen.service';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDesktopScreen: boolean;
  isDarkTheme: Observable<boolean>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private screenService: ScreenService,
    private themeService: ThemeService,
    public translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['en', 'es', 'ca']);
  }

  ngOnInit() {
    this.checkScreenSize();
    this.goTopWhenComponentChange();
    this.setDefaultConfig();
  }

  checkScreenSize = () => {
    this.isDesktopScreen = this.screenService.isDesktopScreen();

    if (isPlatformBrowser(this.platformId)) {
      window.onresize = () => {
        this.isDesktopScreen = this.screenService.isDesktopScreen();
      };
    }
  }

  goTopWhenComponentChange = () => {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });
  }

  setDefaultConfig = () => {
    if (isPlatformBrowser(this.platformId)) {
      const darkTheme = localStorage.getItem('darkTheme');

      if (darkTheme === null) {
        this.themeService.setDarkTheme(true);
      } else {
        this.themeService.setDarkTheme(darkTheme === 'true');
      }

      const lang = localStorage.getItem('lang');
      if (!lang) {
        const defaultLang = 'es';
        localStorage.setItem('lang', defaultLang);
        this.translate.currentLang = defaultLang;
        this.translate.setDefaultLang(defaultLang);
      } else {
        this.translate.currentLang = lang;
        this.translate.setDefaultLang(lang);
      }
    }
  }

}
