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

Cypress.Commands.add('addTextToInputSumBeforeClear', () => {
    addTextToInputBeforeClear('contactFieldSumInput', '1');
});

Cypress.Commands.add('addInvalidSumToInputSum', () => {
    let sum = 10;
    cy.get('[data-cy=contactFieldSumRandomNumbers]').children().each((element: JQuery<HTMLElement>) => {
        sum += parseInt(element.text(), 10);
    })
    .then(() => addTextToInput('contactFieldSumInput', sum.toString()));
});

Cypress.Commands.add('addTextToInputMessageBeforeClear', () => {
    addTextToInputBeforeClear('contactFieldMessageInput', 'nabby27');
});

Cypress.Commands.add('addTextToInputName', () => {
    addTextToInput('contactFieldNameInput', 'nabby27');
});

Cypress.Commands.add('addValidEmailToInputEmail', () => {
    addTextToInput('contactFieldEmailInput', 'nabby27@example.com');
});

Cypress.Commands.add('addValidSumToInputSum', () => {
    let sum = 0;
    cy.get('[data-cy=contactFieldSumRandomNumbers]').children().each((element: JQuery<HTMLElement>) => {
        sum += parseInt(element.text(), 10);
    })
    .then(() => addTextToInput('contactFieldSumInput', sum.toString()));
});

Cypress.Commands.add('addValidMessageToInputMessage', () => {
    addTextToInput('contactFieldMessageInput', 'Say hello!');
});

Cypress.Commands.add('lostFocusOnInput', () => {
    cy.get('[data-cy=contactCard]').first().click();
});

Cypress.Commands.add('isContactSubmitButtonDisabled', () => {
    checkContactButtonDisabled('be.disabled');
});

Cypress.Commands.add('isContactSubmitButtonEnabled', () => {
    checkContactButtonDisabled('not.be.disabled');
});

Cypress.Commands.add('clickContactSubmitButton', () => {
    cy.get('[data-cy=contactSubmitButton]').click();
});

Cypress.Commands.add('isVisibleErrorSnackbar', () => {
    cy.get('[data-cy=snackBarErrorIcon]').should('be.visible');
});

Cypress.Commands.add('isVisibleSuccessSnackbar', () => {
    cy.get('[data-cy=snackBarSuccesIcon]').should('be.visible');
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

const checkContactButtonDisabled = (disabledExpected: 'not.be.disabled' | 'be.disabled') => {
    cy.get('[data-cy=contactSubmitButton]').should(disabledExpected);
};
