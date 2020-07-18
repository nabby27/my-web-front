import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    const container = document.getElementById('container');
    const parallax = new Parallax(container);
  }

}
