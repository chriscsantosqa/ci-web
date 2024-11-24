import createUser from "./createUser.js";

class ValidAccount {
  validLoginCreate(baseUrl) {
    const timestamp = new Date().getTime();
    const email = `chris${timestamp}qa@test.com.br`;
    createUser.fillForm(baseUrl, email);
    const signUpName = Cypress.env("signUpName");
    const emailUser = Cypress.env("emailUser");
    const passwordUser = Cypress.env("passwordUser");
    cy.contains("Logout").click();

    return { emailUser, passwordUser, signUpName };
  }
}
export default new ValidAccount();
