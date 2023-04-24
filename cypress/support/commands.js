// Cypress.Commands.add('visitPage', () => {
//   cy.intercept('http://localhost:3001/api/v1/orders', {
//     fixture: 'mock_orders',
//   })
//   .visit('http://localhost:3000')
//  });

Cypress.Commands.add('visitPage', () => {
  cy.intercept('http://localhost:3001/api/v1/orders', {
    fixture: 'mock_orders',
  })
  .as('mockedOrders')
  .visit('http://localhost:3000')
  .wait('@mockedOrders');
 });
