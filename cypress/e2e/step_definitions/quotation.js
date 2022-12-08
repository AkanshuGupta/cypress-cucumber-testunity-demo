import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
const quotationPage = require("../../pages/QuotationPage")

Then("user clicks on Request Quotation tab", () => {
  quotationPage.clickOnRequestQuotationTab()
});

Then("Verify Request a quotation paget is displayed", () => {
  quotationPage.elements.quotationIncidents().should('be.visible')
});

Then("user fill Request Quotation from", () => {
  quotationPage.fillRequestQoutationForm()
});

Then("user clicks on Save Quotation button", () => {
  quotationPage.clickSaveQuotationBtn()
});

Then("verify Request Quotation saved successfully", () => {
  quotationPage.checkMessageContainsText('You have saved this quotation')
  quotationPage.checkMessageContainsText('Your identification number is')
  quotationPage.checkMessageContainsText('Please write it down for later retrieve')
});

When("user clicks on Retrieve Quotation tab", () => {
  quotationPage.clickOnRetrieveQuotationTab()
});

Then("Verify Retrieve page is displayed", () => {
  quotationPage.elements.identificationNumberInputField().should('be.visible')
});

Then("clicks on Retrieve button", () => {
  quotationPage.clickRetrieveBtn()
});

Then("user enter indentification number", () => {
  quotationPage.enterIdentificationNumber()
});

Then("verify Retrieve Quotation details is displayed", () => {
  quotationPage.elements.tableContent().contains('Insurance Name').should('be.visible')
  quotationPage.elements.tableContent().contains('Breakdowncover').should('be.visible')
  quotationPage.elements.tableContent().contains('Windscreenrepair').should('be.visible')
  quotationPage.elements.tableContent().contains('user_id').should('be.visible')
  quotationPage.elements.tableContent().contains('incidents').should('be.visible')
  quotationPage.elements.tableContent().contains('Registration').should('be.visible')
  quotationPage.elements.tableContent().contains('Annual mileage').should('be.visible')
  quotationPage.elements.tableContent().contains('Estimated value').should('be.visible')
});