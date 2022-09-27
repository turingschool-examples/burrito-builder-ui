import orders from '../fixtures/orders.json'
import post from '../fixtures/post.json'

describe("Form", () => {
    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/orders/', orders)
            .visit("http://localhost:3000/")
    })

    it('should visit' () => {
        cy.visit("http://localhost:3000/")
    })
    it('should be able to submit a post')
        cy.get('input[placeholder="Name"]')
        .type('Maya')
        .get('button[name="beans"]')
        .click()
        .get('buttons[name="queso fresco]')
        .click()
        .get("button")
        .contains("Submit Order")
        .click()
        .get('#3')
})        