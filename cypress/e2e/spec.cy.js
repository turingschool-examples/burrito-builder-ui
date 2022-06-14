describe('Orders Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.intercept("http://localhost:3001/api/v1/orders", {
      fixture: "orderDetails.json"
    });

    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      body: {
        id: 3,
        name: 'Kevin',
        ingredients: ['steak, carnitas, jalapenos']
      }
    })
  })

  it('Should have a title of Burrito Builder', () => {
    cy.contains('h1', 'Burrito Builder')
  })

  it('User should see an input box', () => {
    cy.get('input[name="name"]')
  })

  it('User should see buttons', () => {
    cy.get('form').contains('button', 'beans')
    cy.get('form').contains('button', 'steak')
    cy.get('form').contains('button', 'carnitas')
    cy.get('form').contains('button', 'sofritas')
    cy.get('form').contains('button', 'lettuce')
    cy.get('form').contains('button', 'queso fresco')
    cy.get('form').contains('button', 'pico de gallo')
    cy.get('form').contains('button', 'hot sauce')
    cy.get('form').contains('button', 'guacamole')
    cy.get('form').contains('button', 'jalapenos')
    cy.get('form').contains('button', 'cilantro')
    cy.get('form').contains('button', 'sour cream')
  })

  it('user should be able to build and add burrito to orders', () => {
    cy.get('input[name="name"]')
      .type('Kevin')
      .should("have.value", "Kevin")
      cy.get('form').contains('button', 'steak').click()
      cy.get('form').contains('p', 'steak')
      cy.get('form').contains('button', 'carnitas').click()
      cy.get('form').contains('p', 'carnitas')
      cy.get('form').contains('button', 'Submit Order').click()
      cy.get('form').contains('button', 'jalapenos').click()
      cy.get('form').contains('p', 'jalapenos')
  })
})
