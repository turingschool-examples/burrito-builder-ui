// Visit home page
describe('empty spec', () => {
  beforeEach('intercept and stub orders then visit page', () => {
    cy.visitPage();
  })

  it('should be at the root path', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/');
  });

  it('should have a header with a title and form', () => {
    cy.get('header')
      .contains('h1', 'Burrito Builder')
    
    cy.get('header')
      .find('form')
  });

  it('should have a form with a text input, ingredient buttons, a message prompting the user, and a submit button', () => {
    cy.get('form')
      .find('input')
      .should('have.attr', 'type', 'text')
      .should('have.attr', 'placeholder', 'Name');

    cy.get('form')
      .find('button')
      .should('have.length', 13);

    cy.get('form')
      .find('button').first()
      .contains('beans');
   
    cy.get('form')
      .contains('p', 'Order: Nothing selected');

    cy.get('form')
      .find('button').last()
      .contains('Submit Order');
  });

  it('should have some orders', () => {
    cy.get('section').children().first()
      .contains('h3', 'Pat')
      .get('section').children().first()
      .get('.ingredient-list').contains('beans')
      .get('.ingredient-list').contains('lettuce')
      .get('.ingredient-list').contains('carnitas')
      .get('.ingredient-list').contains('queso fresco')
      .get('.ingredient-list').contains('jalapeno')

    cy.get('section').children().last()
      .contains('h3', 'Sam')
      .get('section').children().first()
      .get('.ingredient-list').contains('steak')
      .get('.ingredient-list').contains('pico de gallo')
      .get('.ingredient-list').contains('lettuce')
      .get('.ingredient-list').contains('carnitas')
      .get('.ingredient-list').contains('queso fresco')
      .get('.ingredient-list').contains('jalapeno')
  });
});