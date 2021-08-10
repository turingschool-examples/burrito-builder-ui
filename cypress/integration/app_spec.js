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

    it.only('Should be able to visit the site and see past orders that have been placed', () => {
        cy
            // .get('.order-container')
            .get('.order')
            .should('have.length', 3)

    })
    

})