import { productArray } from "../support/hardCodedValues";

describe("addToCart", () => {
  it("addToCart auth and unAuth", () => {
    cy.visit("/");

    //add To Cart while signed out!
    cy.get(".MuiButton-label").click();
    cy.get(":nth-child(1) > .sc-kHOZQx").click();
    cy.checkShopUrl();

    //check if redux state updates with backend api fetch
    cy.window()
      .its("store")
      .invoke("getState")
      .then((state) => {
        expect(state.shop.shop).to.be.a("array").and.to.have.lengthOf("6");
      });

    //add items to cart and check if state and total update!
    cy.addItemToCart(productArray);
    cy.get(".sc-bQtJOP").should("have.text", "$ 1751.21");

    cy.window()
      .its("store")
      .invoke("getState")
      .then((state) => {
        expect(state.cart.UnAuthCart.products)
          .to.be.a("array")
          .and.to.have.lengthOf("6");
        expect(state.cart.UnAuthCart.products[0].name).to.include(
          "TracFone Motorola Moto E6 4G LTE"
        );
        expect(state.cart.total).to.eql("1751.21");
      });
  });
});

describe("addToCartAuth", () => {
  it("should add an item to a new users cart", () => {
    cy.visit("/");
    cy.createUser().then((user) => {
      cy.login(user).then(() => {
        cy.get(".MuiButton-label").click();
        cy.get(":nth-child(1) > .sc-kHOZQx").click();
        cy.addItemToCart(productArray);
        cy.wait(1500);
        cy.window()
          .its("store")
          .invoke("getState")
          .then((state) => {
            expect(state.cart.cartItems.products)
              .to.be.a("array")
              .and.to.have.lengthOf("6");
            expect(state.cart.cartItems.products[0].name).to.include(
              "TracFone Motorola Moto E6 4G LTE"
            );
            expect(state.cart.total).to.eql("1751.21");
          });
      });
    });
  });
});
