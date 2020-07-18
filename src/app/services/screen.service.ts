import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  isDesktopScreen = (): boolean => {
    return window.innerWidth > 991;
  }

}
