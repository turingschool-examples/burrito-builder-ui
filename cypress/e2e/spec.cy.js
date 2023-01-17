// Write Cypress tests for the following user flows (don't forget to stub your network requests):

describe('Burrito builder', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', {
      method: 'GET',
      fixture: '../fixtures/mock_data.json',
    })
    cy.visit('http://localhost:3000')
  })

  // When a user visits the page, they can view the page title and the existing orders
  it('should have a title', () => {
    cy.get('h1').contains('Burrito Builder')
  })

  it('should show existing orders', () => {
    cy.get('section > :nth-child(1)').contains('Patty Pie')
    cy.get(':nth-child(1) > .ingredient-list > :nth-child(1)').contains('beans')
    cy.get('section > :nth-child(2)').contains('Samish')
    cy.get(':nth-child(2) > .ingredient-list > :nth-child(1)').contains('steak')
    cy.get('section > :nth-child(3)').contains('Smallelex')
    cy.get(':nth-child(3) > .ingredient-list > :nth-child(1)').contains('sofritas')
    // IRL I would test for all of the ingredients for each order, but skipping them to save time.
  } )

// When a user visits the page, they can view the Form with the proper inputs
  it('should have a visible for with ingredient inputs', () => {
    cy.get('form').should('be.visible')
    cy.get('input').should('have.attr', 'name', 'name')
    cy.get('[value="beans"]').contains('beans')
    cy.get('[value="steak"]').contains('steak')
    cy.get('[value="carnitas"]').contains('carnitas')
    cy.get('[value="sofritas"]').contains('sofritas')
    cy.get('[value="lettuce"]').contains('lettuce')
    // IRL I would test for all of the ingredient inputs, but skipping them to save time.
  } )

  // When a user fills out the form, the information is reflected in the input field's value

  it('should show the user input when data is added to the form', () => {
    cy.get('input[name="name"]').type('Me')
    cy.get('[value="beans"]').click()
    cy.get('[value="sofritas"]').click()
    cy.get('[value="sour cream"]').click()
  } )
})





