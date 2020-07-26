Cypress.Commands.add('isSidenavOpen', () => {
  cy.get('[data-cy=sidenavMenu]').should('exist');
});

Cypress.Commands.add('isSidenavClose', () => {
  cy.get('[data-cy=sidenavMenu]').should('not.visible');
});

Cypress.Commands.add('clickToggleSidenav', () => {
  cy.get('[data-cy=headerToggleSidenav]').click();
});

Cypress.Commands.add('clickOnMenuHome', () => {
  cy.get('[data-cy=sidenavMenu]')
    .children().first().click();
});

Cypress.Commands.add('clickOnMenuContact', () => {
  cy.get('[data-cy=sidenavMenu]')
    .children().last().click();
});
