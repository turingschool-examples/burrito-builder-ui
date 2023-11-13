describe("Burrito Builder homepage userflow", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      fixture: "orders",
    }).as("homepage");
    cy.visit("http://localhost:3000");
  });
  it("should display homepage with orders", () => {
    cy.intercept("POST", "http://localhost:3001/api/v1/orders", {
      statusCode: 201,
      fixture: "postOrder",
    }).as("post");
    cy.wait("@homepage").then((interception) => {
      cy.get("body")
        .get("header")
        .get("h1")
        .contains("h1", "Burrito Builder")
        .get("header")
        .get("form")
        .get("input")
        .should("have.attr", "placeholder", "Name")
        .type("Nicole")
        .should("have.value", "Nicole")
        .get("header")
        .get("form")
        .first()
        .get('[name="beans"]')
        .contains("beans");
    });
  });
});
