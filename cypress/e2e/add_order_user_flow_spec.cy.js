describe("When the user first visits the page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      fixture: "page-load-response",
    });
    cy.intercept("POST", "http://localhost:3001/api/v1/orders", {
      statusCode: 201,
      fixture: "successful-post",
    });
  });

  it("displays a form and a an order display", () => {
    cy.visit("http://localhost:3000/");
    cy.get("section").children().should("have.length", 3);
    cy.get("input").type("Nicole").should("have.value", "Nicole");
    cy.get('[name="beans"]').click();
    cy.get('[name="lettuce"]').click();
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      fixture: "orders-add1",
    });
    cy.get("p").should("have.text", "Order: beans, lettuce");
    cy.get(":nth-child(15)").click();
    cy.wait(1000);
    cy.get("section").children().should("have.length", 4);
    cy.get(":nth-child(4) > h3").should("have.text", "Nicole");
    cy.get(":nth-child(4) > .ingredient-list > :nth-child(1)").should(
      "have.text",
      "beans"
    );
    cy.get(":nth-child(4) > .ingredient-list > :nth-child(2)").should(
      "have.text",
      "lettuce"
    );
    cy.get("section").first().should("include.text", "Pat");
    cy.get("section").last().should("include.text", "Nicole");
  });
});
