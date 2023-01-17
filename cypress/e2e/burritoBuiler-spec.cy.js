describe('Visiting the Burrito Builder page', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders',{
      method: "GET",
      fixture: "../fixtures/getRequest.json"
    }).as("GET Request Intercept")

    cy.visit('http://localhost:3000')
  })
  it('When a user visits the page, they can view the page title and the existing orders', () => {
    cy.get('h1').contains("Burrito Builder");

    cy.get('section > :nth-child(1)').should("contain", "Valentino")
    .and("contain", "beans")
    .and("contain", "lettuce")
    .and("contain", "carnitas")
    .and("contain", "queso fresco")
    .and("contain", "jalapeno")

    cy.get('section > :nth-child(2)').should("contain", "Bambounou")
    .and("contain", "steak")
    .and("contain", "pico de gallo")
    .and("contain", "lettuce")
    .and("contain", "carnitas")
    .and("contain", "queso fresco")
    .and("contain", "jalapeno")

    cy.get('section > :nth-child(3)').should("contain", "Sasha")
    .and("contain", "sofritas")
    .and("contain", "beans")
    .and("contain", "sour cream")
    .and("contain", "carnitas")
    .and("contain", "queso fresco")
  })
  it('When a user visits the page, they can view the Form with the proper inputs', () => {
    cy.get('form').get('input[name="name"]').type("text")
    cy.get('form').get('button[name="beans"]')
    cy.get('form').get('button[name="steak"]')
    cy.get('form').get('button[name="carnitas"]')
    cy.get('form').get('button[name="sofritas"]')
    cy.get('form').get('button[name="lettuce"]')
    cy.get('form').get('button[name="queso fresco"]')
    cy.get('form').get('button[name="pico de gallo"]')
    cy.get('form').get('button[name="hot sauce"]')
    cy.get('form').get('button[name="guacamole"]')
    cy.get('form').get('button[name="jalapenos"]')
    cy.get('form').get('button[name="cilantro"]')
    cy.get('form').get('button[name="sour cream"]')
  })

  it('When a user fills out the form, the information is reflected in the input field\'s value', () => {
    
  })
})