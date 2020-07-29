context('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('should go to contact page', () => {
    cy.isInContactPage();
  });

  it('should go to contact page when click on menu', () => {
    cy.clickOnMenuHome();
    cy.clickOnMenuContact();
    cy.isInContactPage();
  });

  it('should have 2 cards on contact page', () => {
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

  it('should have disabled submit button when load page', () => {
    cy.get('[data-cy=contactSubmitButton]').should('be.disabled');
  });

  it('should show required error on name field', () => {
    cy.addTextToInputNameBeforeClear();
    cy.lostFocusOnInput();
    cy.isShowingRequiredErrorOnInputName();
  });

  it('should show required error on email field', () => {
    cy.addTextToInputEmailBeforeClear();
    cy.lostFocusOnInput();
    cy.isShowingRequiredErrorOnInputEmail();
  });

  it('should show invalid error on email field', () => {
    cy.addInvalidEmailToInputEmail();
    cy.lostFocusOnInput();
    cy.isShowingInvalidErrorOnInputEmail();
  });

  it('should show required error on sum field', () => {
    cy.addTextToInputSumBeforeClear();
    cy.lostFocusOnInput();
    cy.isShowingRequiredErrorOnInputSum();
  });

  it('should show invalid sum error on sum field', () => {
    cy.addInvalidSumToInputSum();
    cy.lostFocusOnInput();
    cy.isShowingInvalidErrorOnInputSum();
  });

  it('should show required error on message field', () => {
    cy.addTextToInputMessageBeforeClear();
    cy.lostFocusOnInput();
    cy.isShowingRequiredErrorOnInputMessage();
  });

  it('should not show errors on name field if is success', () => {
    cy.addTextToInputName();
    cy.lostFocusOnInput();
    cy.isNotShowingRequiredErrorOnInputName();
  });

  it('should not show errors on email field if is success', () => {
    cy.addValidEmailToInputEmail();
    cy.lostFocusOnInput();
    cy.isNotShowingRequiredErrorOnInputEmail();
  });

  it('should not show errors on email field if is success', () => {
    cy.addValidEmailToInputEmail();
    cy.lostFocusOnInput();
    cy.isNotShowingRequiredErrorOnInputEmail();
  });

  it('should not show errors on sum field if is success', () => {
    cy.addValidSumToInputSum();
    cy.lostFocusOnInput();
    cy.isNotShowingRequiredErrorOnInputSum();
  });

  it('should not show errors on message field if is success', () => {
    cy.addValidMessageToInputMessage();
    cy.lostFocusOnInput();
    cy.isNotShowingRequiredErrorOnInputMessage();
  });

  // it('should have enabled submit button when form is success', () => {
  // });

});
