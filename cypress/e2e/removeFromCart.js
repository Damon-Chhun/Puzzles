describe("removeItemFromCart", () => {
  it("should register new user and remove an item from cart", () => {
    cy.visit("/");
    cy.createUser().then(async user => {
      await cy.login(user);
    });

    cy.checkHomeUrl();
    cy.checkAuthToken();

    cy.get(".MuiButton-label").click();
    cy.get(":nth-child(1) > .sc-kHOZQx").click();
    cy.checkShopUrl();

    cy.addItemToCart();

    cy.get(".sc-ctqRej").click();
    cy.wait(3000);

    cy.window()
      .its("store")
      .invoke("getState")
      .then(state => {
        console.log(state.cart.cartItems.products);
        expect(state.cart.cartItems.products).to.be.a("array").and.to.be.empty;
      });
  });
});

describe("removeItemFromCartUnAuth", () => {
  it("should remove an item from cart", () => {
    cy.visit("/");

    cy.get(".MuiButton-label").click();
    cy.get(":nth-child(1) > .sc-kHOZQx").click();
    cy.checkShopUrl();

    cy.addItemToCart();

    cy.get(".sc-ctqRej").click();
    cy.wait(3000);

    cy.window()
      .its("store")
      .invoke("getState")
      .then(state => {
        console.log(state.cart.UnAuthCart.products);
        expect(state.cart.cartItems.products).to.be.a("array").and.to.be.empty;
      });
  });
});
