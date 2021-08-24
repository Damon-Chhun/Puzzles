const productArray = [
  {
    Department: "Phones",
    selector:
      '[name="Phones"] > .sc-clIAKW > .sc-faUofl > :nth-child(1) > .sc-hiwReK > .sc-ehCIER',
  },
  {
    Department: "Laptops",
    selector:
      '[name="Laptops"] > .sc-clIAKW > .sc-faUofl > :nth-child(1) > .sc-hiwReK > .sc-ehCIER',
  },
  {
    Department: "Mens",
    selector:
      '[name="Mens"] > .sc-clIAKW > .sc-faUofl > :nth-child(1) > .sc-hiwReK > .sc-ehCIER',
  },
  {
    Department: "Womens",
    selector:
      '[name="Womens"] > .sc-clIAKW > .sc-faUofl > :nth-child(1) > .sc-hiwReK > .sc-ehCIER',
  },
  {
    Department: "Hats",
    selector:
      '[name="Hats"] > .sc-clIAKW > .sc-faUofl > :nth-child(1) > .sc-hiwReK > .sc-ehCIER',
  },
  {
    Department: "Shoes",
    selector:
      '[name="Shoes"] > .sc-clIAKW > .sc-faUofl > :nth-child(1) > .sc-hiwReK > .sc-ehCIER',
  },
];

describe("removeItemFromCart", () => {
  it("should register new user and remove an item from cart", () => {
    cy.visit("/");
    cy.createUser().then(async (user) => {
      await cy.login(user);
    });

    cy.checkHomeUrl();
    cy.checkAuthToken();

    cy.get(".MuiButton-label").click();
    cy.get(":nth-child(1) > .sc-kHOZQx").click();
    cy.checkShopUrl();

    cy.addItemToCart(productArray);

    cy.removeProductArray();

    cy.window()
      .its("store")
      .invoke("getState")
      .then((state) => {
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

    cy.addItemToCart(productArray);

    cy.removeProductArray();

    cy.window()
      .its("store")
      .invoke("getState")
      .then((state) => {
        console.log(state.cart.UnAuthCart.products);
        expect(state.cart.cartItems.products).to.be.a("array").and.to.be.empty;
      });
  });
});

describe("removeItemFromCartWithArrows", () => {
  it("should remove an item from cart using the arrows in drawer", () => {
    cy.visit("/");

    cy.get(".MuiButton-label").click();
    cy.get(":nth-child(1) > .sc-kHOZQx").click();
    cy.checkShopUrl();

    cy.addItemToCart(productArray);

    for (let x = 1; x < 7; x++) {
      cy.get(
        `:nth-child(1) > .sc-jUotMc > .sc-jQrCkL > .sc-fbyett > :nth-child(1)`
      ).click();
      cy.findByText("Phones").click();
      cy.wait(500);
    }
    cy.wait(1000);

    cy.window()
      .its("store")
      .invoke("getState")
      .then((state) => {
        console.log(state.cart.UnAuthCart.products);
        expect(state.cart.cartItems.products).to.be.a("array").and.to.be.empty;
      });
  });
});
