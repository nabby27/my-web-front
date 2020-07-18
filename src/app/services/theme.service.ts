import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark: boolean;

  setDarkTheme(isDarkTheme: boolean): void {
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
