Cypress.Commands.add('interceptGetOrders', () => {
  cy.intercept('http://localhost:3001/api/v1/orders', {
    statusCode: 200,
    fixture: 'mock_orders',
  })
  .as('getInitialOrders')
 });

 Cypress.Commands.add('interceptPostOrders', () => {
  cy.intercept('POST', '<api url>', {
    statusCode: 200,
    headers: {
      'content-type': 'application/json'
    },
    body: {
      name: 'Kirk',
      ingredients: ['steak', 'queso fresco']
    }
  }).as('postOrder')
 });