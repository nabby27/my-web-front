declare namespace Cypress {
    interface Chainable {
        checkGithubIconLink(): Chainable<Element>
        checkStackOverflowIconLink(): Chainable<Element>
        checkLinkdinIconLink(): Chainable<Element>
        checkInstagramIconLink(): Chainable<Element>
        checkTwitterIconLink(): Chainable<Element>

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
        clickOnMenuProjects(): Chainable<Element>
        clickOnMenuAboutMe(): Chainable<Element>
        clickOnMenuContact(): Chainable<Element>
        
        isInHomePage(): Chainable<Element>
        isInEducationPage(): Chainable<Element>
        isInWorkExperiencePage(): Chainable<Element>
        isInProjectsPage(): Chainable<Element>
        isInAboutMePage(): Chainable<Element>
        isInContactPage(): Chainable<Element>


        checkNumberOfAcademicTitles(): Chainable<Element>
        checkNumberOfCourses(): Chainable<Element>
        
        clickAcademicTitleHeader(): Chainable<Element>
        clickCoursesHeader(): Chainable<Element>

        isAcademicTitlePanelClosed(): Chainable<Element>;
        isAcademicTitlePanelOpened(): Chainable<Element>;
        isCoursesPanelClosed(): Chainable<Element>;
        isCoursesPanelOpened(): Chainable<Element>;

        checkNumberOfWorkExperience(): Chainable<Element>;
        haveTwoContactCards(): Chainable<Element>;

        isNotShowingRequiredErrorOnInputName(): Chainable<Element>;
        isNotShowingRequiredErrorOnInputEmail(): Chainable<Element>;
        isNotShowingInvalidErrorOnInputEmail(): Chainable<Element>;
        isNotShowingRequiredErrorOnInputSum(): Chainable<Element>;
        isNotShowingInvalidErrorOnInputSum(): Chainable<Element>;
        isNotShowingRequiredErrorOnInputMessage(): Chainable<Element>;

        isShowingRequiredErrorOnInputName(): Chainable<Element>;
        isShowingRequiredErrorOnInputEmail(): Chainable<Element>;
        isShowingInvalidErrorOnInputEmail(): Chainable<Element>;
        isShowingRequiredErrorOnInputSum(): Chainable<Element>;
        isShowingInvalidErrorOnInputSum(): Chainable<Element>;
        isShowingRequiredErrorOnInputMessage(): Chainable<Element>;

        addTextToInputNameBeforeClear(): Chainable<Element>;
        addTextToInputEmailBeforeClear(): Chainable<Element>;
        addInvalidEmailToInputEmail(): Chainable<Element>;
        addTextToInputSumBeforeClear(): Chainable<Element>;
        addInvalidSumToInputSum(): Chainable<Element>;
        addTextToInputMessageBeforeClear(): Chainable<Element>;
        
        addTextToInputName(): Chainable<Element>;
        addValidEmailToInputEmail(): Chainable<Element>;
        addValidSumToInputSum(): Chainable<Element>;
        addValidMessageToInputMessage(): Chainable<Element>;

        lostFocusOnInput(): Chainable<Element>;

        isContactSubmitButtonDisabled(): Chainable<Element>;
        isContactSubmitButtonEnabled(): Chainable<Element>;

        clickContactSubmitButton(): Chainable<Element>;
        isVisibleErrorSnackbar(): Chainable<Element>;
        isVisibleSuccessSnackbar(): Chainable<Element>;
    }
  }