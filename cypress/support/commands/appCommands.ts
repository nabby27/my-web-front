// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('clickOnHeaderName', () => {
  cy.get('[data-cy=headerName]').click();
});

Cypress.Commands.add('isInHomePage', () => {
  isInPage('/home', 0, 'homeContainer', 'Iván Córdoba Donet');
});

Cypress.Commands.add('isInEducationPage', () => {
  isInPage('/education', 1, 'educationContainer', 'FORMACIÓN ACADÉMICA');
});

Cypress.Commands.add('isInWorkExperiencePage', () => {
  isInPage('/work-experience', 2, 'workExperienceContainer', 'Green Urban Data');
});

Cypress.Commands.add('isInProjectsPage', () => {
  isInPage('/projects', 3, 'projectsContainer', 'nabby27');
});

Cypress.Commands.add('isInAboutMePage', () => {
  isInPage('/about-me', 4, 'aboutMeContainer', 'Me considero');
});

Cypress.Commands.add('isInContactPage', () => {
  isInPage('/contact', 5, 'contactContainer', '¡Contáctame!');
});

Cypress.Commands.add('checkGithubIconLink', () => {
  checkIconLink('headerSocialNetworkIconGithub', 'https://github.com/nabby27');
});

Cypress.Commands.add('checkStackOverflowIconLink', () => {
  checkIconLink('headerSocialNetworkIconStackOverflow', 'https://stackoverflow.com/users/11404854/nabby27');
});

Cypress.Commands.add('checkLinkdinIconLink', () => {
  checkIconLink('aboutMeSocialNetworkIconLinkdin', 'https://www.linkedin.com/in/ivancordobadonet/');
});

Cypress.Commands.add('checkInstagramIconLink', () => {
  checkIconLink('aboutMeSocialNetworkIconInstagram', 'https://www.instagram.com/ivancordoba_06/');
});

Cypress.Commands.add('checkTwitterIconLink', () => {
  checkIconLink('aboutMeSocialNetworkIconTwitter', 'https://twitter.com/IvanCordoba_06');
});

const isInPage = (url: string, menuPosition: number, containerPage: string, textOnPage: string) => {
  cy.url()
    .should('include', url)
    .get('[data-cy=sidenavMenuElement]')
    .eq(menuPosition)
    .should('have.css', 'background-color', 'rgb(33, 33, 33)')
    .get(`[data-cy=${containerPage}]`)
    .contains(textOnPage);
};

const checkIconLink = (iconId: string, url: string) => {
  cy.get(`[data-cy=${iconId}]`).should('have.attr', 'target', '_blank').should('have.attr', 'href', url);
};
