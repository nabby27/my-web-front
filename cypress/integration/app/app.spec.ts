context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show dark theme by default', () => {
    cy.isDarkThemeActive();
  });

  it('should show spanish language by default', () => {
    cy.isSpanishSelected();
  });

  it('should change language to english', () => {
    cy.selectLanguageEnglish();

    cy.isEnglishSelected();
  });

  it('should change language to catalan', () => {
    cy.selectLanguageCatalan();

    cy.isCatalanSelected();
  });

  it('should remember language selected', () => {
    cy.get('[data-cy=languageSelect]').click()
      .get('mat-option').contains('ca').click();

    cy.visit('/');

    cy.get('[data-cy=languageSelect]').contains('ca');
    cy.get('[data-cy=homeContainer]').contains('Benvingut/da a la meua pàgina web!');
  });

  it('should remember theme selected', () => {
    cy.get('[data-cy=toggleDarkTheme]').click();

    cy.visit('/');

    cy.isLightThemeActive();
  });

});
