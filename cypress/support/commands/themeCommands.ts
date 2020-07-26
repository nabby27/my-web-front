Cypress.Commands.add('isDarkThemeActive', () => {
  cy.get('[data-cy=toggleDarkTheme] input').should('be.checked');
  cy.get('#app').should('have.attr', 'class', 'dark-theme');
});

Cypress.Commands.add('isLightThemeActive', () => {
  cy.get('[data-cy=toggleDarkTheme] input').should('not.be.checked');
  cy.get('#app').should('have.attr', 'class', 'light-theme');
});

Cypress.Commands.add('clickToggleTheme', () => {
cy.get('[data-cy=toggleDarkTheme]').click();
});
