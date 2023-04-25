describe('Sad Path: User Tries to Submit Order without All Requirements', () => {
  beforeEach('intercept and stub orders then visit page', () => {
    cy.interceptGetOrders();
    cy.visit('http://localhost:3000');
    cy.wait('@getInitialOrders');
  })
  
  it('passes', () => {
    
  })
})