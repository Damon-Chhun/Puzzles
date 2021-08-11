import { buildUser } from "./generate";

Cypress.Commands.add("createUser", overrides => {
  const user = buildUser(overrides);
  console.log(user);
  cy.request({
    url: "http://localhost:5000/api/users/",
    method: "POST",
    body: user
  }).then(response => ({ ...response.body.user, ...user }));
});

Cypress.Commands.add("checkHomeUrl", overrides => {
  //check that if registered successful, returned to home
  cy.url().should("eq", `${Cypress.config().baseUrl}/`);
});

Cypress.Commands.add("checkAuthToken", overrides => {
  //check if localstorage is updated!
  cy.window()
    .its("localStorage.token")
    .should("be.a", "string");
});
