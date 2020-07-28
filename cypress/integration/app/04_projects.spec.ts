context('Projects Page', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('should be go to projects page', () => {
    cy.isInProjectsPage();
  });

  it('should be go to projects page when click on menu', () => {
    cy.clickOnMenuContact();
    cy.clickOnMenuProjects();
    cy.isInProjectsPage();
  });

});
