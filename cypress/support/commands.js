Cypress.Commands.add('interceptBeforeOrders', () => {
  cy.intercept('http://localhost:3001/api/v1/orders', {
    fixture: 'mock_orders',
  })
  .as('before_orders')
 });
