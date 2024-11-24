class Product {
  searchProduct(baseUrl) {
    cy.visit(baseUrl);
    cy.contains(`Products`).click();
    cy.url().should("contain", "products");
    cy.get(".title").should("be.visible").and("contain", "All Products");
    cy.get("input#search_product").type("Shirt");
    cy.get("button#submit_search").click();
    cy.get(".title").should("be.visible").and("contain", "Searched Products");
  }
}
export default new Product();
