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

Cypress.Commands.add('clickOnHeaderName', () => {
    cy.get('[data-cy=headerName]').click();
});

Cypress.Commands.add('isInHome', () => {
  cy.url().should('include', '/home')
    .get('[data-cy=sidenavMenu] mat-button-toggle').first().should('have.css', 'background-color', 'rgb(33, 33, 33)')
    .get('[data-cy=homeContainer]').contains('Iván Córdoba Donet');
});
