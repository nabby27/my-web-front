import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faHourglassEnd, faDownload, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-academic-title-card',
  templateUrl: './academic-title-card.component.html',
  styleUrls: ['./academic-title-card.component.scss'],
})
export class AcademicTitleCardComponent implements OnInit {
  @Input() academicTitle;

  constructor(library: FaIconLibrary, public translate: TranslateService) {
    library.addIcons(faMapMarkerAlt, faGlobe, faHourglassEnd, faDownload);
  }

  ngOnInit() {}
}
