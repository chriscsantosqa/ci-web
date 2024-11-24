class CreateUser {
  fillForm(baseUrl, email) {
    const signUpName = "Tester Chris";
    const emailUser = email;
    const passwordUser = "test123456@";
    Cypress.env("signUpName", signUpName);
    Cypress.env("emailUser", emailUser);
    Cypress.env("passwordUser", passwordUser);

    cy.visit(baseUrl);
    cy.contains("Signup / Login").click();
    cy.contains("New User Signup!");
    cy.get('[data-qa="signup-name"]').type(Cypress.env("signUpName"));
    cy.get('[data-qa="signup-email"]').type(Cypress.env("emailUser"));
    cy.get('[data-qa="signup-button"]').click();
    cy.get("h2").contains("Enter Account Information");
    cy.get("input[type=radio]").eq(0).check();
    cy.get("[type=password]").type(Cypress.env("passwordUser"));
    cy.get('[data-qa="days"]').select(6);
    cy.get('[data-qa="months"]').select(7);
    cy.get('[data-qa="years"]').select("1992");
    cy.get("input[type=checkbox]#newsletter").check();
    cy.get("input[type=checkbox]#optin").check();
    cy.get('[data-qa="first_name"]').type("Christopher");
    cy.get('[data-qa="last_name"]').type("QA");
    cy.get('[data-qa="company"]').type("Home");
    cy.get('[data-qa="address"]').type("Homeland");
    cy.get('[data-qa="country"]').select("United States");
    cy.get('[data-qa="state"]').type("São Paulo");
    cy.get('[data-qa="city"]').type("Araçatexas");
    cy.get('[data-qa="zipcode"]').type("1547801");
    cy.get('[data-qa="mobile_number"]').type("546 45896-8787");
    cy.get('[data-qa="create-account"]').click();
    cy.url().should("includes", "account_created");
    cy.get('[data-qa="account-created"]').should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
  }
}
export default new CreateUser();
