import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WorkExperience } from '../../models/work-experience';

@Component({
  selector: 'app-work-experience-card',
  templateUrl: './work-experience-card.component.html',
  styleUrls: ['./work-experience-card.component.scss'],
})
export class WorkExperienceCardComponent implements OnInit {
  @Input() workExperience: WorkExperience;

  constructor(public translate: TranslateService) {}

  ngOnInit() {}
}
