describe('Order Form', () => {
    beforeEach(() => {
        cy.fixture('orders.json').then((orderData) => {
          cy.intercept('http://localhost:3001/api/v1/orders', orderData)
        })
        cy.visit('http://localhost:3000/')
    })

    it('Should be able to see a text input field in the form on the main page', () => {
        cy
            .get('input')
            .should('be.visible')
    })

    it('Should be able to type a name into a text input field in the form on the main page', () => {
        cy
            .get('input')
            .type('Balthazar')
            .should('have.value', "Balthazar")
    })

    it('Should be able to see ingredients buttons in the form on the main page', () => {
        cy
            .get('.ingredients-buttons')
            .contains('beans')
    })

    it('Should be able to click on a button and add an ingredient the order list', () => {
        cy
            .get('.ingredients-buttons')
            .find('button')
            .first()
            .click()
            .get('.order-ingredients')
            .should('have.length', 1)
    })

    it('Should be able to click on a button and add multiple ingredients the order list', () => {
        cy
            .get('.ingredients-buttons')
            .find('button')
            .first()
            .click()
            .get('.ingredients-buttons')
            .find('button')
            .last()
            .click()
            .get('.order-ingredients')
            .contains('beans, sour cream')
    })

    it('Should be able to submit an order and see it on the page', () => {
        cy
            .get('input')
            .type('Balthazar')
            .get('.ingredients-buttons')
            .find('button')
            .first()
            .click()
            .get('.submit-btn')
            .click()
            .get('.order')
            .should('have.length', 4)

    })

    it.only('Should not submit an order if name is not included', () => {
        cy
            .get('.ingredients-buttons')
            .find('button')
            .first()
            .click()
            .get('.submit-btn')
            .click()
            .get('.order')
            .should('have.length', 3)

    })


})