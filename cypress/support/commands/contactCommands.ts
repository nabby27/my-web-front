Cypress.Commands.add('haveTwoContactCards', () => {
    cy.get('[data-cy=contactCard]').children().should('have.length', 2);
});

Cypress.Commands.add('isNotShowingRequiredErrorOnInputName', () => {
    isNotShowingInputError('contactFieldNameRequiredError');
});

Cypress.Commands.add('isNotShowingRequiredErrorOnInputEmail', () => {
    isNotShowingInputError('contactFieldEmailRequiredError');
});

Cypress.Commands.add('isNotShowingInvalidErrorOnInputEmail', () => {
    isNotShowingInputError('contactFieldEmailIvalidError');
});

Cypress.Commands.add('isNotShowingRequiredErrorOnInputSum', () => {
    isNotShowingInputError('contactFieldSumRequiredError');
});

Cypress.Commands.add('isNotShowingInvalidErrorOnInputSum', () => {
    isNotShowingInputError('contactFieldSumInvalidError');
});

Cypress.Commands.add('isNotShowingRequiredErrorOnInputMessage', () => {
    isNotShowingInputError('contactFieldMessageRequiredError');
});

Cypress.Commands.add('isShowingRequiredErrorOnInputName', () => {
    isShowingInputError('contactFieldNameRequiredError');
});

Cypress.Commands.add('isShowingRequiredErrorOnInputEmail', () => {
    isShowingInputError('contactFieldEmailRequiredError');
});

Cypress.Commands.add('isShowingInvalidErrorOnInputEmail', () => {
    isShowingInputError('contactFieldEmailInvalidError');
});

Cypress.Commands.add('isShowingRequiredErrorOnInputSum', () => {
    isShowingInputError('contactFieldSumRequiredError');
});

Cypress.Commands.add('isShowingInvalidErrorOnInputSum', () => {
    isShowingInputError('contactFieldSumInvalidError');
});

Cypress.Commands.add('isShowingRequiredErrorOnInputMessage', () => {
    isShowingInputError('contactFieldMessageRequiredError');
});

Cypress.Commands.add('addTextToInputNameBeforeClear', () => {
    addTextToInputBeforeClear('contactFieldNameInput', 'nabby27');
});

Cypress.Commands.add('addTextToInputEmailBeforeClear', () => {
    addTextToInputBeforeClear('contactFieldEmailInput', 'nabby27');
});

Cypress.Commands.add('addInvalidEmailToInputEmail', () => {
    addTextToInput('contactFieldEmailInput', 'nabby27');
});

Cypress.Commands.add('lostFocusOnInput', () => {
    cy.get('[data-cy=contactCard]').first().click();
});

const isNotShowingInputError = (errorAnchorId: string) => {
    checkInputErrorVisibility(errorAnchorId, 'not.visible');
};

const isShowingInputError = (errorAnchorId: string) => {
    checkInputErrorVisibility(errorAnchorId, 'visible');
};

const checkInputErrorVisibility = (errorAnchorId: string, isVisibile: 'visible' | 'not.visible') => {
    cy.get(`[data-cy=${errorAnchorId}]`).should(isVisibile);
};

const addTextToInputBeforeClear = (inputAnchorId: string, textToInput: string) => {
    addTextToInput(inputAnchorId, textToInput);
    cy.get(`[data-cy=${inputAnchorId}]`).clear();
};

const addTextToInput = (inputAnchorId: string, textToInput: string) => {
    cy.get(`[data-cy=${inputAnchorId}]`).type(textToInput);
};
