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
  cy.get('[data-cy=sidenavMenuElement]').eq(0).click();
});

Cypress.Commands.add('clickOnMenuEducation', () => {
  clickOnMenuItem(1);
});

Cypress.Commands.add('clickOnMenuWorkExperience', () => {
  clickOnMenuItem(2);
});

Cypress.Commands.add('clickOnMenuContact', () => {
  clickOnMenuItem(5);
});

const clickOnMenuItem = (position: number) => {
  cy.get('[data-cy=sidenavMenuElement]').eq(position).click();
};
