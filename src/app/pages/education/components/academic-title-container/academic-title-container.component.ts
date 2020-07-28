import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AcademicTitle } from '../../models/academic-title';

@Component({
  selector: 'app-academic-title-container',
  templateUrl: './academic-title-container.component.html',
  styleUrls: ['./academic-title-container.component.scss']
})
export class AcademicTitleContainerComponent {

  @Input() title: string;
  @Input() icon: string[];
  @Input() academicTitles: AcademicTitle[];

  constructor(public translate: TranslateService) {
  }

}
