describe('Order Form', () => {
    beforeEach(() => {
        cy.fixture('orders.json').then((orderData) => {
          cy.intercept('http://localhost:3001/api/v1/orders', orderData)
        })
        cy.visit('http://localhost:3000/')
    })

    it('Should be able to visit the page and see a title in the header', () => {
        cy
            .get('h1')
            .contains('Burrito Builder')
    })

    it('Should be able to visit the site and see past orders that have been placed', () => {
        cy
            .get('.order')
            .should('have.length', 3)
    })

    it('Should be able to see a name on an order that has been placed', () => {
        cy
            .get(':nth-child(1) > h3')
            .contains('Pat')
    })

})