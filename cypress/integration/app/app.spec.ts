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
    cy.selectLanguageCatalan();

    cy.reload();

    cy.isCatalanSelected();
  });

  it('should remember theme selected', () => {
    cy.clickToggleTheme();

    cy.reload();

    cy.isLightThemeActive();
  });

  it('should toggle sidenav on click icon', () => {
    cy.isSidenavOpen();

    cy.clickToggleSidenav();
    cy.isSidenavClose();

    cy.clickToggleSidenav();
    cy.isSidenavOpen();
  });

  it('should go to github profile when click on github icon', () => {
    cy.get('[data-cy=headerSocialNetworkIconGithub]')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://github.com/nabby27');
  });

  it('should go to stack overflow profile when click on stack overflow icon', () => {
    cy.get('[data-cy=headerSocialNetworkIconStackOverflow]')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://stackoverflow.com/users/11404854/nabby27');
  });

  it('should show current date on footer', () => {
    cy.get('[data-cy=footer]')
      .contains(new Date().getFullYear());
  });

});
