// Can visit a specific path
it("Can visit a specific path", () => {
  // cy.visit("/random"); // fail
  cy.visit("/");
})

// Can load CSS stylesheet
it("Can load CSS stylesheet", () => {
  cy.visit("/");
  // cy.get("h1").should("have.css", "color", "black"); // fail
  cy.get("h1").should("have.css", "color", "rgb(255, 0, 0)");
})

// 