import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  isDesktopScreen = (): boolean => {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth > 991;
    }
  };
}
