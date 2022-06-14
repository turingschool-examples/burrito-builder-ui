

describe("Burrito builder home page"), () => {
  
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/orders", orders).as("testData")
    cy.visit("http://localhost:3000/")
  })

  it("Should display Burrito Builder", () => {
    cy.get("h1")
      .contains("Burrito Builder")

  })

  it("Should allow me to add a new order", () => {
    cy.intercept("http://localhost:3001/api/v1/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json"
   
   
