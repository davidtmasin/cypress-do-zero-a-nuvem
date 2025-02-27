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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Xablau',
    lastName: 'Master',
    validEmail: 'xablaumaster@teste.com',
    shortMessage: 'Teste QA'
}) => {
    cy.get('#firstName').as('campo_nome')
    cy.get('@campo_nome').should('be.visible')
    cy.get('@campo_nome').type(data.firstName)
    cy.get('@campo_nome').should('have.value', data.firstName)

    cy.get('#lastName').as('campo_sobrenome')
    cy.get('@campo_sobrenome').should('be.visible')
    cy.get('@campo_sobrenome').type(data.lastName)
    cy.get('@campo_sobrenome').should('have.value', data.lastName)

    cy.get('#email').as('campo_email')
    cy.get('@campo_email').should('be.visible')
    cy.get('@campo_email').type(data.validEmail)
    cy.get('@campo_email').should('have.value', data.validEmail)

    cy.get('#open-text-area').as('como-podemos-te-ajudar')
    cy.get('@como-podemos-te-ajudar').should('be.visible')
    cy.get('@como-podemos-te-ajudar').type(data.shortMessage, {delay: 0})
    cy.get('@como-podemos-te-ajudar').should('have.value', data.shortMessage)

    cy.get('button[type="submit"]').as('enviar-form')
    cy.get('@enviar-form').should('be.visible')
    cy.get('@enviar-form').click()
})