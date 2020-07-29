context('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('should be go to contact page', () => {
    cy.isInContactPage();
  });

  it('should be go to contact page when click on menu', () => {
    cy.clickOnMenuHome();
    cy.clickOnMenuContact();
    cy.isInContactPage();
  });

  it('should be have 2 cards on contact page', () => {
    cy.haveTwoContactCards();
  });

  it('should not show form errors on first load page', () => {
    cy.isNotShowingRequiredErrorOnInputName();
    cy.isNotShowingRequiredErrorOnInputEmail();
    cy.isNotShowingInvalidErrorOnInputEmail();
    cy.isNotShowingRequiredErrorOnInputSum();
    cy.isNotShowingInvalidErrorOnInputSum();
    cy.isNotShowingRequiredErrorOnInputMessage();
  });

  it('should be show required error on name field', () => {
    cy.addTextToInputNameBeforeClear();
    cy.lostFocusOnInput();
    cy.isShowingRequiredErrorOnInputName();
  });

  it('should be show required error on email field', () => {
    cy.addTextToInputEmailBeforeClear();
    cy.lostFocusOnInput();
    cy.isShowingRequiredErrorOnInputEmail();
  });

  it('should be show invalid error on email field', () => {
    cy.addInvalidEmailToInputEmail();
    cy.lostFocusOnInput();
    cy.isShowingInvalidErrorOnInputEmail();
  });

});
