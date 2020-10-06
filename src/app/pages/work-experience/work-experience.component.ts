import { Component } from '@angular/core';
import { WorkExperience } from './models/work-experience';
import { workExperience } from './constants';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  workExperiences: WorkExperience[] = workExperience;

  constructor() {}
}
