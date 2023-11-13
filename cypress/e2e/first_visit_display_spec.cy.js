describe("When the user first visits the page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      fixture: "page-load-response",
    });
  });

  it("displays a form and a an order display", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("have.text", "Burrito Builder");
    cy.get("p").should("have.text", "Order: Nothing selected");
    cy.get("form").should("exist");
    cy.get("form").find("input").should("exist");
    cy.get("form").find("button").should("have.length", 13);
    cy.get("section").children().should("have.length", 3);
    cy.get(":nth-child(1) > h3").should("have.text", "Pat");
    cy.get(":nth-child(2) > h3").should("have.text", "Sam");
    cy.get(":nth-child(3) > h3").should("have.text", "Alex");
    cy.get("section").first().should("include.text", "Pat");
    cy.get("section").last().should("include.text", "Alex");
  });
});
