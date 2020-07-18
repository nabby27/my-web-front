import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCodeBranch, faEye, faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { programmingLanguageColors } from '../../constants';
import { Project } from '../../models/project';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.scss']
})
export class GithubCardComponent {

  @Input() githubRepository: Project;

  programmingLanguageColors = programmingLanguageColors;

  constructor(library: FaIconLibrary, public translate: TranslateService) {
    library.addIcons(faCodeBranch, faEye, faStar, faChevronRight);
  }

  getColorForProgrammingLanguage(programmingLanguage: string): string {
    return this.programmingLanguageColors[programmingLanguage.toUpperCase()];
  }

}
