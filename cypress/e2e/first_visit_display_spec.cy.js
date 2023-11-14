describe("When the user first visits the page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      fixture: "page-load-response",
    });
  });

  it("displays a form with 12 buttons ", () => {
    cy.visit("http://localhost:3000/");
    cy.get("form").find("button").first().should("have.value", "beans");
    cy.get("form").find("button").first().should("have.value", "beans");
    cy.get("form").find("button").eq(0).should("have.text", "beans");
    cy.get("form").find("button").eq(1).should("have.text", "steak");
    cy.get("form").find("button").eq(2).should("have.text", "carnitas");
    cy.get("form").find("button").eq(3).should("have.text", "sofritas");
    cy.get("form").find("button").eq(4).should("have.text", "lettuce");
    cy.get("form").find("button").eq(5).should("have.text", "queso fresco");
    cy.get("form").find("button").eq(6).should("have.text", "pico de gallo");
    cy.get("form").find("button").eq(7).should("have.text", "hot sauce");
    cy.get("form").find("button").eq(8).should("have.text", "guacamole");
    cy.get("form").find("button").eq(9).should("have.text", "jalapenos");
    cy.get("form").find("button").eq(10).should("have.text", "cilantro");
    cy.get("form").find("button").eq(11).should("have.text", "sour cream");

    cy.get("form").find("button").last().should("have.text", "Submit Order");
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
    cy.get("section").first().should("include.text", "Pat");
    cy.get("section").last().should("include.text", "Alex");
  });
});
