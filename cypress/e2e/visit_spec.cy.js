describe('empty spec', () => {
  beforeEach('intercept and stub orders then visit page', () => {
    cy.visitPage();
  })

  it('should be at the root path', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/');
  });
});