import { buildUser } from "../support/generate";

describe("register", () => {
  it("should register a new user", () => {
    //create a new user w/ faker api
    const user = buildUser();
    console.log("buildUser Object", user);

    //navigate UI to register
    cy.visit("/");
    cy.findByText(/^Sign in$/).click();
    cy.get(".sc-htJSpn > a").click();
    cy.get(":nth-child(1) > .sc-edESPO").type(user.firstName);
    cy.get(":nth-child(2) > .sc-edESPO").type(user.lastName);
    cy.get(":nth-child(3) > .sc-edESPO").type(user.email);
    cy.get(":nth-child(4) > .sc-edESPO").type(user.password);
    cy.get(":nth-child(5) > .sc-edESPO").type(user.password);
    cy.get(".sc-iWBMBB").click();

    cy.checkHomeUrl();
    cy.checkAuthToken();
  });
});
