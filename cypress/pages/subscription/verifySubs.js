class Subscription {
  verifySubscription(baseUrl) {
    cy.visit(baseUrl);
    cy.get(".single-widget > h2").scrollIntoView().contains("Subscription");
    cy.get("input#susbscribe_email").type("chrisqa@test.com.br");
    cy.get("button#subscribe").click();
  }
}
export default new Subscription();
