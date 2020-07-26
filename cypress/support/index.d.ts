declare namespace Cypress {
    interface Chainable {
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
        clickOnMenuContact(): Chainable<Element>
        
        isInHome(): Chainable<Element>
    }
  }