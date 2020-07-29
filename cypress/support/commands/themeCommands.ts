Cypress.Commands.add('isDarkThemeActive', () => {
  isThemActive('dark-theme', 'be.checked');
});

Cypress.Commands.add('isLightThemeActive', () => {
  isThemActive('light-theme', 'not.be.checked');
});

Cypress.Commands.add('clickToggleTheme', () => {
  cy.get('[data-cy=toggleDarkTheme]').click();
});

const isThemActive = (themeName: string, isToggleChecked: 'not.be.checked' | 'be.checked') => {
  cy.get('[data-cy=toggleDarkTheme] input').should(isToggleChecked);
  cy.get('#app').should('have.attr', 'class', themeName);
};
