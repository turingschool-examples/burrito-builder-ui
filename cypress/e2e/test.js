describe('Order', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {fixtured: 'orders'}.as('orders')
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      body: {
        id:,
        name:'Kevin King',
        ingredients: ["steak", "sofritas", "sofritas", "sofritas", "lettuce"]
      }
    })
    cy.visit('http://localhost:3000')
  )
    })





  })
