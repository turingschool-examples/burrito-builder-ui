describe('Order Form', () => {
    beforeEach(() => {
        cy.fixture('orders.json').then((orderData) => {
          cy.intercept('http://localhost:3001/api/v1/orders', orderData)
        })
        cy.visit('http://localhost:3001/')
    })

    it('Should be able to visit the page and see a title in the header', () => {
        cy
            .get('h1')
            .contains('Burrito Builder')
    })

    

})