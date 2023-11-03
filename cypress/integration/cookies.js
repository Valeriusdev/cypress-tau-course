/// <reference types="cypress" />


describe('Cookies', () => {

  beforeEach(() => {

    Cypress.Cookies.preserveOnce('trello_token')

    cy
      .visit('/')

  })

  it('test #1', () => {

    cy
      .setCookie('trello_token', '')

    cy
      .reload()

  });

  it('test #2', () => {

  });

  it('test #3', () => {

  });

});
