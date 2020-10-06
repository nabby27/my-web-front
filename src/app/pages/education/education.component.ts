import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { academicTraining, courses } from './constants';
import { AcademicTitle } from './models/academic-title';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  academicsTrainings: AcademicTitle[] = academicTraining;
  courses: AcademicTitle[] = courses;

  constructor(public translate: TranslateService, private library: FaIconLibrary) {
    this.library.addIcons(faAward, faGraduationCap);
  }
}
