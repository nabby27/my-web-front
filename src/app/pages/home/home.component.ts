import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Parallax from 'parallax-js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object, public translate: TranslateService) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.getElementById('container');
      // tslint:disable-next-line: no-unused-expression
      new Parallax(container);
    }
  }
}
