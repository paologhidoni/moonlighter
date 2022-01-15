// Can visit a specific path
it("Can visit a specific path", () => {
  // cy.visit("/random"); // FAILS
  cy.visit("/");
})


// Can load CSS stylesheet
it("Can load CSS stylesheet", () => {
  cy.visit("/");

  // cy.get(".post-add-form").find("input[name='user']").should("have.css", "padding", "20px"); // FAILS

  cy.get(".post-add-form").find("input[name='user']").should("have.css", "padding", "16px");
})


// Can add a post
it("Can add a post", () => {
  cy.visit("/");

  cy.get(".post-add-form").find("input[name='user']").type("TEST USER");

  cy.get(".post-add-form").find("textarea[name='message']").type("TEST MESSAGE");

  cy.get(".post__submit-btn").click();

  // cy.get(".post__user").contains("FAILING TEST USER"); // FAILS

  cy.get(".post__user").contains("TEST USER"); 

  cy.get(".post__message").contains("TEST MESSAGE");


})


// Can delete a post
it("Can delete a post", () => {
  cy.visit("/");
  
  cy.get(".post__delete-btn").first().click();

  // cy.get("li").first().should("not.contain", "Michelle"); // FAILS

  cy.get("li").first().should("contain", "Michelle");
  cy.get("li").first().should("not.contain", "Marco");
  cy.get("li").first().should("not.contain", "Paolo"); 
})