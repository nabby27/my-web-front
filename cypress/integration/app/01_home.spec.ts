context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to home page', () => {
    cy.isInHomePage();
  });

  it('should go to home page when click on my name', () => {
    cy.clickOnMenuContact();
    cy.clickOnHeaderName();
    cy.isInHomePage();
  });

  it('should go to home page when click home on menu', () => {
    cy.clickOnMenuContact();
    cy.clickOnMenuHome();
    cy.isInHomePage();
  });
});
