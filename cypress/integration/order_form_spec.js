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


})