// Test when user visits home page to make sure all elements properly render

describe('empty spec', () => {
  beforeEach('intercept and stub orders then visit page', () => {
    cy.interceptGetOrders();
    cy.visit('http://localhost:3000');
    cy.wait('@getInitialOrders');
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
      .find('button').eq(0).contains('beans')
      .get('button').eq(1).contains('steak')
      .get('button').eq(2).contains('carnitas')
      .get('button').eq(3).contains('sofritas')
      .get('button').eq(4).contains('lettuce')
      .get('button').eq(5).contains('queso fresco')
      .get('button').eq(6).contains('pico de gallo')
      .get('button').eq(7).contains('hot sauce')
      .get('button').eq(8).contains('guacamole')
      .get('button').eq(9).contains('jalapenos')
      .get('button').eq(10).contains('cilantro')
      .get('button').eq(11).contains('sour cream')
      .get('button').eq(12).should('have.text', 'Submit Order');
   
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