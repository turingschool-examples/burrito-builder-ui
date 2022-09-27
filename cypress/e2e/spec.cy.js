describe('Planet flight reservation user flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      fixture: "/burrito_data.json",
    }) .as("orders");
    cy.visit('http://localhost:3000/')
  })
  it('should be able to visit the page and find the header', () => {
    cy.get('h1')
    .contains('Burrito Builder')
  })
  it('should be able to see button that submits an order', () => {
    cy.get('.submit-btn')
    .should('be.visible')
  })
});