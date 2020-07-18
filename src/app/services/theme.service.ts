import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  setDarkTheme(isDarkTheme: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('darkTheme', isDarkTheme + '');

      if (isDarkTheme) {
        this.isDark = true;
        document.getElementById('app').classList.add('dark-theme');
        document.getElementById('app').classList.remove('light-theme');
      } else {
        this.isDark = false;
        document.getElementById('app').classList.add('light-theme');
        document.getElementById('app').classList.remove('dark-theme');
      }
    }
  }

}
