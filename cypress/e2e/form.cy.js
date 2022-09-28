import orders from '../fixtures/orders.json'
import post from '../fixtures/post.json'

describe("Form", () => {
    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/orders/', orders)
        .intercept("POST", 'http://localhost:3001/api/v1/orders/', post)
    })

    it('should visit', () => {
        cy.visit("http://localhost:3000/", {

        })
    })
    it('should be able to submit a post', () => {
        cy.get('input')
        .type('Maya')
        .get('button')
        .contains('beans')
        .click()
        .get('button')
        .contains('queso fresco')
        .click()
        .get('button')
        .contains('guacamole')
        .click()
        .get('button')
        .contains('lettuce')
        .click()
        .get('button')
        .contains('Submit Order')
        .click()
        .get('div')
        .should('contain', 'Maya')
})
})