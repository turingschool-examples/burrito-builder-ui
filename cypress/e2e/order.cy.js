describe('post new order', () => {
  beforeEach('intercept and stub page visit', () => {
    cy.visitPage()
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders')
  });

  it('should let the user fill out the form and select an ingredient', () => {
    cy.get('input').type('Kirk')
      .should('have.value', 'Kirk')

    cy.get('button').contains('beans').click();
  });
});

// I was unable to finish the rest of the tests.