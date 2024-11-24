class LogoutUser {
  logout(signUpName) {
    cy.get("i.fa-user").parent().should("contain", signUpName);
    cy.contains("Logout").click();
  }
}
export default new LogoutUser();
