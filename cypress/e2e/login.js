import { buildUser } from "../support/generate";

describe("login", () => {
  it("should login an existing user", () => {
    cy.createUser().then(user => {
      cy.visit("/");
      cy.findByText(/^Sign in$/).click();
      cy.get(":nth-child(1) > .sc-lkgURy").type(user.email);
      cy.get(":nth-child(2) > .sc-lkgURy").type(user.password);
      cy.get(".sc-dUbuoE").click();
      cy.checkHomeUrl();
      cy.checkAuthToken();
    });
  });
});
