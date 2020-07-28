context('Education Page', () => {
  beforeEach(() => {
    cy.visit('/education');
  });

  it('should be go to education page', () => {
    cy.isInEducationPage();
  });

  it('should be go to education page when click on menu', () => {
    cy.clickOnMenuContact();
    cy.clickOnMenuEducation();
    cy.isInEducationPage();
  });

  it('should be have 3 academc titles', () => {
    cy.checkNumberOfAcademicTitles();
  });

  it('should be have 6 courses', () => {
    cy.checkNumberOfCourses();
  });

  it('should be close/open academic titles panel', () => {
    cy.clickAcademicTitleHeader();
    cy.isAcademicTitlePanelClosed();
    cy.clickAcademicTitleHeader();
    cy.isAcademicTitlePanelOpened();
  });

  it('should be close/open courses panel', () => {
    cy.clickCoursesHeader();
    cy.isCoursesPanelClosed();
    cy.clickCoursesHeader();
    cy.isCoursesPanelOpened();
  });

});
