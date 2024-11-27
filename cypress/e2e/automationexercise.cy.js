import {
  validUser,
  createUser,
  loginUser,
  logoutUser,
  contactUs,
  listProduct,
  searchProduct,
  subscription,
  cartProduct,
} from "../support/index.js";

describe("Automation Exercise Test Automation", () => {
  const baseUrl = "https://automationexercise.com";
  let emailUser;
  let passwordUser;
  let signUpName;

  beforeEach(function () {
    if (this.currentTest.title.includes("[validLogin]")) {
      const validAccount = validUser.validLoginCreate(baseUrl);
      emailUser = validAccount.emailUser;
      passwordUser = validAccount.passwordUser;
      signUpName = validAccount.signUpName;
    }
  });

  it("Test Case 1: Register User", () => {
    const timestamp = new Date().getTime();
    const emailUser = `chris${timestamp}qa@test.com.br`;

    createUser.fillForm(baseUrl, emailUser);
    cy.get("i.fa-user").parent().should("contain", Cypress.env("signUpName"));
    cy.contains("Delete Account").click();
    cy.contains("Account Deleted!").should("contain", "Account Deleted!");
  });
  it("Test Case 2: Login User with correct email and password [validLogin]", () => {
    loginUser.login(baseUrl, emailUser, passwordUser);
    cy.get("i.fa-user").parent().should("contain", Cypress.env("signUpName"));
    cy.contains("Delete Account").click();
    cy.contains("Account Deleted!").should("contain", "Account Deleted!");
  });
  it("Test Case 3: Login User with incorrect email and password", () => {
    loginUser.login(baseUrl, "testqa@test.com.br", "123456");
    cy.get("p").should("contain", "Your email or password is incorrect!");
  });
  it("Test Case 4: Logout User [validLogin]", () => {
    loginUser.login(baseUrl, emailUser, passwordUser);
    logoutUser.logout(signUpName);
    cy.url().should("contain", "login");
    cy.contains("Login to your account").should("be.visible");
  });
  it("Test Case 5: Register User with existing email [validLogin]", () => {
    cy.visit(baseUrl);
    cy.contains("Signup").click();
    cy.get('[data-qa="signup-name"]').type(signUpName);
    cy.get('[data-qa="signup-email"]').type(emailUser);
    cy.contains("button", "Signup").click();
    cy.get(`.signup-form form p`)
      .should("be.visible")
      .and("contain", "Email Address already exist!");
  });
  it("Test Case 6: Contact Us Form", () => {
    contactUs.contactUsForm(baseUrl);
    cy.get(".status").should(
      "have.text",
      "Success! Your details have been submitted successfully.",
    );
  });
  it("Test Case 8 : Verify All Products and product detail page", () => {
    listProduct.verifyProducts(baseUrl);
    cy.get(".product-information > h2").should("be.visible");
    cy.get(".product-information span span").should("be.visible");
    cy.get(".product-information p").should("be.visible").and("have.length", 4);
  });
  it("Test Case 9: Search Product", () => {
    searchProduct.searchProduct(baseUrl);
    cy.get(".single-products")
      .should("be.visible")
      .and("have.length.at.least", 1);
  });
  it("Test Case 10: Verify Subscription in home page", () => {
    subscription.verifySubscription(baseUrl);
    cy.contains("You have been successfully subscribed!").should("be.visible");
  });
  it("Test Case 15: Place Order: Register before Checkout", () => {
    const timestamp = new Date().getTime();
    const emailUser = `chris${timestamp}qa@test.com.br`;

    createUser.fillForm(baseUrl, emailUser);
    cy.get("b").should("contain", Cypress.env("signUpName"));

    cartProduct.addCartProduct();
    cy.get('[data-qa="order-placed"]').should("be.visible");
    cy.get('[href *="delete"]').click();
    cy.get("b").should("contain", "Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
  });
});
