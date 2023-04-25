describe('Sad Path: User Tries to Submit Order without All Requirements', () => {
  beforeEach('intercept and stub orders then visit page', () => {
    cy.interceptGetOrders();
    cy.visit('http://localhost:3000');
    cy.wait('@getInitialOrders');
  });
  
  it('should not allow the user to submit an order without a name or ingredients', () => {
    cy.get('section')
      .find('.order').should('have.length', 2);
    
    cy.get('button').contains('Submit Order').click();

    cy.get('section')
      .find('.order').should('have.length', 2);
  });

  it('should not allow the user to submit an order with just a name', () => {
    cy.get('section')
      .find('.order').should('have.length', 2);
    
    cy.get('input').type('Kirk');

    cy.get('button').contains('Submit Order').click();

    cy.get('section')
      .find('.order').should('have.length', 2);
  });

  it('should not allow the user to submit an order with just an ingredient', () => {
    cy.get('section')
      .find('.order').should('have.length', 2);

    cy.get('button').first().click();

    cy.get('section')
      .find('.order').should('have.length', 2);
  });
})