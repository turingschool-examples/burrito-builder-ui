import testOrders from '../fixtures/testData'
import testPost from '../fixtures/testData'

describe("Burrito Builder page", () => { 
  
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/orders", testOrders)
    cy.visit("http://localhost:3000/")
  })

  it('should display the title "burrito builder", have a name form, buttons of ingredients, and display current orders', () => {
    cy.get('h1').contains("Burrito Builder")
    cy.get('input').type("Rio").should('have.value', "Rio")
    cy.get("button").should("have.length", 13).contains('lettuce')
    cy.get('section').contains('Pat')
    
  })

    it('should be able to make a burrito order and display that order', () => {
      cy.intercept("http://localhost:3001/api/v1/orders", {
      method: "POST",
      body: JSON.stringify(testPost),
      headers: {
        "Content-Type": "application/json"
      }
    })
      cy.get("input").type('Rio')
      cy.get('button[name="steak"]').click()
      cy.get('button[name="queso fresco"]').click()
      cy.get('button[name="lettuce"]').click()
      cy.get('button[name="jalapenos"]').click()
      cy.get('button[name="sour cream"]').next()
      .contains("steak, queso fresco, lettuce, jalapenos")
      cy.get('button').last().click()
      cy.get('h3').contains('Rio')
      
    })

})

