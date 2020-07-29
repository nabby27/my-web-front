context('Projects Page', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('should go to projects page', () => {
    cy.isInProjectsPage();
  });

  it('should go to projects page when click on menu', () => {
    cy.clickOnMenuContact();
    cy.clickOnMenuProjects();
    cy.isInProjectsPage();
  });

});
