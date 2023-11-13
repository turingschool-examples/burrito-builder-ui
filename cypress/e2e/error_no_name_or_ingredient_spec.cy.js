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
    cy.get(":nth-child(15)").click();
    cy.get("section").children().should("have.length", 3);
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal(
        "Please add a name and select at least one ingredient"
      );
    });
    cy.wait(1000);
    cy.get("input").clear();
    cy.get('[name="beans"]').click();
    cy.get(":nth-child(15)").click();
    cy.get("section").children().should("have.length", 3);
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal(
        "Please add a name and select at least one ingredient"
      );
    });
    cy.get("section").first().should("include.text", "Pat");
    cy.get("section").last().should("include.text", "Alex");
  });
});
