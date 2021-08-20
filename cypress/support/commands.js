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

Cypress.Commands.add("checkShopUrl", overrides => {
  //check shop url
  cy.url().should("eq", `${Cypress.config().baseUrl}/shop`);
});

Cypress.Commands.add("checkAuthToken", overrides => {
  //check if localstorage is updated!
  cy.window()
    .its("localStorage.token")
    .should("be.a", "string");
});
Cypress.Commands.add("login", user => {
  cy.findByText(/^Sign in$/).click();
  cy.get(":nth-child(1) > .sc-lkgURy").type(user.email);
  cy.get(":nth-child(2) > .sc-lkgURy").type(user.password);
  cy.get(".sc-dUbuoE").click();
  cy.checkHomeUrl();
  cy.checkAuthToken();
});
Cypress.Commands.add("addItemToCart", overrides => {
  //add To Cart while signed out!
  // cy.get(".MuiButton-label").click();
  // cy.get(":nth-child(1) > .sc-kHOZQx").click();
  cy.checkShopUrl();

  //check if redux state updates with backend api fetch
  cy.window()
    .its("store")
    .invoke("getState")
    .then(state => {
      expect(state.shop.shop)
        .to.be.a("array")
        .and.to.have.lengthOf("6");
    });

  //add items to cart and check if state and total update!
  cy.get(
    '[name="Phones"] > .sc-clIAKW > .sc-faUofl > :nth-child(1) > .sc-hiwReK > .sc-ehCIER'
  ).click();
  cy.get(".sc-bQtJOP").should("have.text", "$ 42.67");
});

Cypress.Commands.add("addItemToCartPOST", () => {
  const token = window.localStorage.getItem("token");
  console.log(token);
  cy.request({
    url: "http://localhost:5000/api/shop/",
    method: "POST",
    body: {
      productID: "60184d7420688c0f704eb77f",
      quantity: "1"
    },
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`
    }
  }).then(response => console.log(response));
});
