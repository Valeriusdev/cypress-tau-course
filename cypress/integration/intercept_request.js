/// <reference types="cypress" />

it('Intercept requests', () => {

  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    }).as('createBoard')

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('hello{enter}')

  cy
    .wait('@createBoard')
    .then( (board) => {
      expect(board.response.statusCode).to.eq(201)
      expect(board.request.body.name).to.eq('hello')
    })

});