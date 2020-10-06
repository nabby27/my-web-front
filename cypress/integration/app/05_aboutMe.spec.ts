context('About Me Page', () => {
  beforeEach(() => {
    cy.visit('/about-me');
  });

  it('should go to about me page', () => {
    cy.isInAboutMePage();
  });

  it('should go to about me page when click on menu', () => {
    cy.clickOnMenuContact();
    cy.clickOnMenuAboutMe();
    cy.isInAboutMePage();
  });

  it('should go to linkdin profile when click on linkdin icon', () => {
    cy.checkLinkdinIconLink();
  });

  it('should go to instagram profile when click on instagram icon', () => {
    cy.checkInstagramIconLink();
  });

  it('should go to twitter profile when click on twitter icon', () => {
    cy.checkTwitterIconLink();
  });
});
