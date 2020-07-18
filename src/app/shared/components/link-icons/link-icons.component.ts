import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-icons',
  templateUrl: './link-icons.component.html',
  styleUrls: ['./link-icons.component.scss']
})
export class LinkIconsComponent implements OnInit {

  @Input() linkIcons;

  constructor() { }

  ngOnInit() {
  }

}
