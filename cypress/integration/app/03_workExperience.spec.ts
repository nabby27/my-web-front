context('Work Experience Page', () => {
  beforeEach(() => {
    cy.visit('/work-experience');
  });

  it('should be go to work experience page', () => {
    cy.isInWorkExperiencePage();
  });

  it('should be go to work experience page when click on menu', () => {
    cy.clickOnMenuContact();
    cy.clickOnMenuWorkExperience();
    cy.isInWorkExperiencePage();
  });

  it('should be have 2 companies on work experience', () => {
    cy.checkNumberOfWorkExperience();
  });

});
