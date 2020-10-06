Cypress.Commands.add('checkNumberOfAcademicTitles', () => {
  checkTitlesOnPanel(0, 3);
});

Cypress.Commands.add('checkNumberOfCourses', () => {
  checkTitlesOnPanel(1, 6);
});

Cypress.Commands.add('clickAcademicTitleHeader', () => {
  clickPanelHeader(0);
});

Cypress.Commands.add('clickCoursesHeader', () => {
  clickPanelHeader(1);
});

Cypress.Commands.add('isAcademicTitlePanelClosed', () => {
  isPanelNotVisible(0);
});

Cypress.Commands.add('isAcademicTitlePanelOpened', () => {
  isPanelVisible(0);
});

Cypress.Commands.add('isCoursesPanelClosed', () => {
  isPanelNotVisible(1);
});

Cypress.Commands.add('isCoursesPanelOpened', () => {
  isPanelVisible(1);
});

const checkTitlesOnPanel = (numberPanel: number, expectedTitles: number) => {
  cy.get('[data-cy=academicTitlesContainer]')
    .eq(numberPanel)
    .find('[data-cy=academicTitleCard]')
    .should('have.length', expectedTitles);
};

const clickPanelHeader = (numberPanel: number) => {
  cy.get('[data-cy=academicTitlesContainer]').eq(numberPanel).find('[data-cy=academicTitlesContainerHeader]').click();
};

const isPanelVisible = (numberPanel: number) => {
  checkPanelVisibility(numberPanel, 'visible');
};

const isPanelNotVisible = (numberPanel: number) => {
  checkPanelVisibility(numberPanel, 'not.visible');
};

const checkPanelVisibility = (numberPanel: number, visible: 'visible' | 'not.visible') => {
  cy.get('[data-cy=academicTitlesContainer]')
    .eq(numberPanel)
    .find('[data-cy=academicTitlesContainerContent]')
    .should(visible);
};
