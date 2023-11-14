describe("When the user tries to submit their order without a name or at least one ingredient", () => {
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

  it("will alert a message and not post the item if the user does not add a name in the input field", () => {
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
    cy.get("section").children().should("have.length", 3);
    cy.get(":nth-child(1) > h3").should("have.text", "Pat");
    cy.get(":nth-child(2) > h3").should("have.text", "Sam");
    cy.get(":nth-child(3) > h3").should("have.text", "Alex");
    cy.get("section > :nth-child(1)").should(
      "include.text",
      "Patbeanslettucecarnitasqueso frescojalapeno"
    );
    cy.get("section > :nth-child(2)").should(
      "include.text",
      "Samsteakpico de gallolettucecarnitasqueso frescojalapeno"
    );
    cy.get("section > :nth-child(3)").should(
      "include.text",
      "Alexsofritasbeanssour creamcarnitasqueso fresco"
    );
  });
  it("will alert a message and not post the item if the user does not include a name in the input field, but selects an ingredients(s)", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input");
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
    cy.get("section").children().should("have.length", 3);
    cy.get(":nth-child(1) > h3").should("have.text", "Pat");
    cy.get(":nth-child(2) > h3").should("have.text", "Sam");
    cy.get(":nth-child(3) > h3").should("have.text", "Alex");
    cy.get("section > :nth-child(1)").should(
      "include.text",
      "Patbeanslettucecarnitasqueso frescojalapeno"
    );
    cy.get("section > :nth-child(2)").should(
      "include.text",
      "Samsteakpico de gallolettucecarnitasqueso frescojalapeno"
    );
    cy.get("section > :nth-child(3)").should(
      "include.text",
      "Alexsofritasbeanssour creamcarnitasqueso fresco"
    );
  });
  it("will alert a message and not post the item if the user does not include a name or an ingredient", () => {
    cy.visit("http://localhost:3000/");
    cy.get("form").find("button").last().click();
    cy.get("section").children().should("have.length", 3);
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal(
        "Please add a name and select at least one ingredient"
      );
    });
    cy.get("section").first().should("include.text", "Pat");
    cy.get("section").last().should("include.text", "Alex");
    cy.get("section").children().should("have.length", 3);
    cy.get(":nth-child(1) > h3").should("have.text", "Pat");
    cy.get(":nth-child(2) > h3").should("have.text", "Sam");
    cy.get(":nth-child(3) > h3").should("have.text", "Alex");
    cy.get("section > :nth-child(1)").should(
      "include.text",
      "Patbeanslettucecarnitasqueso frescojalapeno"
    );
    cy.get("section > :nth-child(2)").should(
      "include.text",
      "Samsteakpico de gallolettucecarnitasqueso frescojalapeno"
    );
    cy.get("section > :nth-child(3)").should(
      "include.text",
      "Alexsofritasbeanssour creamcarnitasqueso fresco"
    );
  });
});
