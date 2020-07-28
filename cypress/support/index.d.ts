declare namespace Cypress {
    interface Chainable {
        checkGithubIconLink(): Chainable<Element>
        checkStackOverflowIconLink(): Chainable<Element>

        isDarkThemeActive(): Chainable<Element>
        isLightThemeActive(): Chainable<Element>
        
        clickToggleTheme(): Chainable<Element>

        isSpanishSelected(): Chainable<Element>
        isEnglishSelected(): Chainable<Element>
        isCatalanSelected(): Chainable<Element>

        selectLanguageSpanish(): Chainable<Element>
        selectLanguageEnglish(): Chainable<Element>
        selectLanguageCatalan(): Chainable<Element>

        isSidenavOpen(): Chainable<Element>
        isSidenavClose(): Chainable<Element>
        
        clickToggleSidenav(): Chainable<Element>
        
        clickOnHeaderName(): Chainable<Element>
        clickOnMenuHome(): Chainable<Element>
        clickOnMenuEducation(): Chainable<Element>
        clickOnMenuWorkExperience(): Chainable<Element>
        clickOnMenuContact(): Chainable<Element>
        
        isInHomePage(): Chainable<Element>
        isInEducationPage(): Chainable<Element>
        isInWorkExperiencePage(): Chainable<Element>

        checkNumberOfAcademicTitles(): Chainable<Element>
        checkNumberOfCourses(): Chainable<Element>
        
        clickAcademicTitleHeader(): Chainable<Element>
        clickCoursesHeader(): Chainable<Element>

        isAcademicTitlePanelClosed(): Chainable<Element>;
        isAcademicTitlePanelOpened(): Chainable<Element>;
        isCoursesPanelClosed(): Chainable<Element>;
        isCoursesPanelOpened(): Chainable<Element>;

        checkNumberOfWorkExperience(): Chainable<Element>;
    }
  }