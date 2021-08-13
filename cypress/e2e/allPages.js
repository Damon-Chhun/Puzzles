describe("unAuth Page Test", () => {
  it("should go through every page while signed out", () => {
    cy.visit("/");
  });
});
