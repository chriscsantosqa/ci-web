class Products {
  verifyProducts(baseUrl) {
    cy.visit(baseUrl);
    cy.contains(`Products`).click();
    cy.url().should("contain", "products");
    cy.get(".title").should("be.visible").and("contain", "All Products");
    cy.get(".single-products")
      .should("be.visible")
      .and("have.length.at.least", 1)
      .first()
      .parent()
      .contains("View Product")
      .click();
  }
}
export default new Products();
