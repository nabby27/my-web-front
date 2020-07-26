context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to home', () => {
    cy.isInHome();
  });

  it('should be go to home when click on my name', () => {
    cy.clickOnMenuContact();

    cy.clickOnHeaderName();

    cy.isInHome();
  });

  it('should be go to home when click home on menu', () => {
    cy.clickOnMenuContact();

    cy.clickOnMenuHome();

    cy.isInHome();
  });

});
