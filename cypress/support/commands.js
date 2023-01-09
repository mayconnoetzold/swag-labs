Cypress.Commands.add("login", () => {
  cy.visit("");
  cy.reload();
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});
