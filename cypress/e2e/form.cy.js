import orders from '../fixtures/orders.json'
import post from '../fixtures/post.json'

describe("Form", () => {
    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/orders/', orders)
        cy.intercept("POST", 'http://localhost:3001/api/v1/orders/4', post)
        cy.visit("http://localhost:3000/")

    })

    // it('shoudl display data from the api', () => {
    //     cy.get('div')
    //     .find('#1')
    //     .should('contain', 'Pat')
    // })
    it('should be able to submit a post', () => {
        cy.get('input')
        .type('Maya')
        cy.get('button')
        .contains('beans')
        .click()
        cy.get('button')
        .contains('queso fresco')
        .click()
        cy.get('button')
        .contains('guacamole')
        .click()
        cy.get('button')
        .contains('lettuce')
        .click()
        cy.get('button')
        .contains('Submit Order')
        .click()
        cy.get('.order')
        .should('contain', 'Maya')
        cy.get('.order')
        .find('ul')
        .get('li')
        .should('contain', 'beans')
        .get('li')
        .get('li')
        .should('contain', 'queso fresco')
        .should('contain', 'guacamole')
        .get('li')
        .should('contain, lettuce')
})
})