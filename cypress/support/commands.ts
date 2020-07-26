// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('isDarkThemeActive', () => {
    cy.get('[data-cy=toggleDarkTheme] input').should('be.checked');
    cy.get('[data-cy=sidenav]').should('have.css', 'background-color', 'rgb(66, 66, 66)');
});

Cypress.Commands.add('isLightThemeActive', () => {
    cy.get('[data-cy=toggleDarkTheme] input').should('not.be.checked');
    cy.get('[data-cy=sidenav]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
});

Cypress.Commands.add('isSpanishSelected', () => {
  isLanguageSelected('es', '¡Bienvenido/a a mi página web!');
});

Cypress.Commands.add('isEnglishSelected', () => {
  isLanguageSelected('en', 'Welcome to my website!');
});

Cypress.Commands.add('isCatalanSelected', () => {
  isLanguageSelected('ca', 'Benvingut/da a la meua pàgina web!');
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

Cypress.Commands.add('isInHome', () => {
    cy.url().should('include', '/home')
      .get('[data-cy=sidenavMenu]').first().should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .get('[data-cy=homeContainer]').contains('¡Bienvenido/a a mi página web!');
});

Cypress.Commands.add('clickOnHeaderName', () => {
    cy.get('[data-cy=headerName]').click();
});

Cypress.Commands.add('clickOnMenuHome', () => {
    cy.get('[data-cy=sidenavMenu]')
      .children().first().click();
});

Cypress.Commands.add('clickOnMenuContact', () => {
    cy.get('[data-cy=sidenavMenu]')
      .children().last().click();
});

const isLanguageSelected = (language: string, expectedText: string) => {
  cy.get('[data-cy=languageSelect]').contains(language);
  cy.get('[data-cy=homeContainer]').contains(expectedText);
};

const selectLanguage = (language: string) => {
  cy.get('[data-cy=languageSelect]').click()
      .get('mat-option').contains(language).click();
};
