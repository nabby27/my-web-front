import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ScreenService } from './services/screen.service';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, Event } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

declare let gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDesktopScreen: boolean;
  isDarkTheme: Observable<boolean>;

  navigationEnd: Observable<Event>;

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
    this.navigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));
    this.goTopWhenComponentChange();
    this.trackingNavigationOnGoogleAnalytics();
    this.setDefaultConfig();
  }

  checkScreenSize = () => {
    this.isDesktopScreen = this.screenService.isDesktopScreen();

    if (isPlatformBrowser(this.platformId)) {
      window.onresize = () => {
        this.isDesktopScreen = this.screenService.isDesktopScreen();
      };
    }
  };

  goTopWhenComponentChange = () => {
    this.navigationEnd.subscribe(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });
  };

  trackingNavigationOnGoogleAnalytics = () => {
    this.navigationEnd.subscribe((event: NavigationEnd) => {
      if (isPlatformBrowser(this.platformId) && environment.production) {
        gtag('config', 'UA-156632619-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  };

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
  };
}
