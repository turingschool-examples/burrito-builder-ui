// Tests user flow for when they fill out the form and submit an order. They should be able to fill out the text input and select ingredients based on clicking the ingredient buttons. They should see their oder build in real time, and they should see their order appear on the DOM after submission.

describe('post new order', () => {
  beforeEach('setup intercepts and stub page visit', () => {
    cy.interceptGetOrders();
    cy.interceptPostOrders();
    cy.visit('http://localhost:3000');
    cy.wait('@getInitialOrders');
  });

  it('should let the user fill out the form and select ingredients', () => {
    cy.get('input').type('Kirk');
    
    cy.get('input')
      .should('have.value', 'Kirk');

    cy.get('button').contains('steak').click();

    cy.get('button').contains('queso fresco').click();
  });

  it('should show the user their order, let them submit it, and see it on screen', () => {
    cy.interceptGetNewOrders();
    
    cy.get('input').type('Kirk');
    cy.get('button').contains('steak').click();
    cy.get('button').contains('queso fresco').click();

    cy.get('form > p')
      .contains('Order: steak, queso fresco');

    cy.get('button').contains('Submit Order').click();

    cy.get('.order')
      .should('have.length', 3);
    
    cy.get('.order').last()
    .contains('h3', 'Kirk')
    .get('.order').last().find('.ingredient-list').contains('steak')
    .get('.order').last().find('.ingredient-list').contains('queso fresco');
  });
});