describe("addToCart", () => {
  it("addToCart auth and unAuth", () => {
    cy.visit("/");

    //add To Cart while signed out!
    cy.get(".MuiButton-label").click();
    cy.get(":nth-child(1) > .sc-kHOZQx").click();
    cy.checkShopUrl();

    cy.window()
      .its("store")
      .invoke("getState")
      .then(state => {
        expect(state.shop.shop)
          .to.be.a("array")
          .and.to.have.lengthOf("6");
      });
  });
});
