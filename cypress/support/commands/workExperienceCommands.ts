Cypress.Commands.add('checkNumberOfWorkExperience', () => {
  cy.get('[data-cy=workExperienceCard]').should('have.length', 2);
});
