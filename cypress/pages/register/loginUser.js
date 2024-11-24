class LoginUser {
  login(baseUrl, email, password) {
    cy.visit(baseUrl);
    cy.contains("Signup / Login").click();
    cy.contains("Login to your account");
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  }
}
export default new LoginUser();
