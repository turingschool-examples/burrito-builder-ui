describe('Sad Path: User Tries to Submit Order without All Requirements', () => {
  beforeEach('intercept and stub orders then visit page', () => {
    cy.interceptGetOrders();
    cy.visit('http://localhost:3000');
    cy.wait('@getInitialOrders');
  });
  
  it('should not allow the user to submit an order without a name or ingredients', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders')
    
    cy.get('section')
      .find('.order').should('have.length', 2);
    
    cy.get('button').contains('Submit Order').click();

    cy.get('section')
      .find('.order').should('have.length', 2);
  });
})