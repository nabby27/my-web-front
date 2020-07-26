Cypress.Commands.add('isSpanishSelected', () => {
  isLanguageSelected('es', 'Desarrollador de software');
});

Cypress.Commands.add('isEnglishSelected', () => {
  isLanguageSelected('en', 'Software Developer');
});

Cypress.Commands.add('isCatalanSelected', () => {
  isLanguageSelected('ca', 'Desenvolupador de software');
});

Cypress.Commands.add('selectLanguageSpanish', () => {
  selectLanguage('es');
});

Cypress.Commands.add('selectLanguageEnglish', () => {
  selectLanguage('en');
});

Cypress.Commands.add('selectLanguageCatalan', () => {
  selectLanguage('ca');
});

const isLanguageSelected = (language: string, expectedText: string) => {
  cy.get('[data-cy=languageSelect]').contains(language);
  cy.get('[data-cy=sidenavFooter]').contains(expectedText);
};

const selectLanguage = (language: string) => {
  cy.get('[data-cy=languageSelect]').click()
      .get('mat-option').contains(language).click();
};
