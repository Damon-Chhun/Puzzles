import { buildUser } from "../support/generate";

describe("login", () => {
  it("should login an existing user", () => {
    const user = buildUser();
    console.log(user);
    cy.request({
      url: "http://localhost:5000/api/users/",
      method: "POST",
      body: user
    }).then(response => ({ ...response.body.user, ...user }));

    cy.visit("/");
    cy.findByText(/^Sign in$/).click();
    cy.get(":nth-child(1) > .sc-lkgURy").type(user.email);
    cy.get(":nth-child(2) > .sc-lkgURy").type(user.password);
    cy.get(".sc-dUbuoE").click();

    //check that if registered successful, returned to home
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);

    //check if localstorage is updated!
    cy.window()
      .its("localStorage.token")
      .should("be.a", "string");
  });
});
