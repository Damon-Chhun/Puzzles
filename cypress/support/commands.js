import { buildUser } from "./generate";

Cypress.Commands.add("createUser", overrides => {
  const user = buildUser();
  console.log(user);
  cy.request({
    url: "http://localhost:5000/api/users/",
    method: "POST",
    body: user
  }).then(response => ({ ...response.body.user, ...user }));
});
