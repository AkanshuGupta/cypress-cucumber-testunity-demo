import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Given("A web browser is at the guru99 login page", () => {
  cy.visit("https://demo.guru99.com/insurance/v1/index.php");
  // cy.visit('/')
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username, password) => {
  loginPage.submitLogin(username, password)
});

Then("Verify {string} text is displayed and user is logged in successfully", (text) => {
  loginPage.checkPageContainsText(text)
});

Then("User clicks on logout button", () => {
  loginPage.clickLogoutButton()
});

Then("verify user log out successfully and login page is displayed", () => {
  loginPage.checkLoginFormIsDisplayed()
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});

Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
