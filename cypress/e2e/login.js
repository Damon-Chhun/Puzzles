import { buildUser } from "../support/generate";

describe("login", () => {
  it("should login an existing user", () => {
    const user = buildUser();
    cy.request({
      url: "http://localhost:5000/api/users/",
      method: "post",
      body: user
    }).then(response => ({ ...response.body.user, ...user }));

    cy.visit("/");
  });
});
