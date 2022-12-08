class QuotationPage {
    elements = {
        requestQuotationTab: () => cy.get('#newquote'),
        retrieveQuotationTab: () => cy.get('#retrieve'),
        quotationIncidents: () => cy.get('#quotation_incidents'),
        registrationInputFiled: () => cy.get('#quotation_vehicle_attributes_registration'),
        mileageInputField: () => cy.get('#quotation_vehicle_attributes_mileage'),
        parkinglocationDropDown: () => cy.get('#quotation_vehicle_attributes_parkinglocation'),
        saveQuotationBtn: () => cy.get('input[value="Save Quotation"]'),
        quotationSucessMessage: () => cy.get('body b'),
        identificationNumberInputField: () => cy.get('input[placeholder="identification number"]'),
        retrieveBtn: () => cy.get('#getquote'),
        tableContent: () => cy.get('tbody td b')

    };

    clickOnRequestQuotationTab() {
        this.elements.requestQuotationTab().should('be.visible').click()
    }

    clickOnRetrieveQuotationTab() {
        this.elements.retrieveQuotationTab().should('be.visible').click()
    }

    fillRequestQoutationForm() {
        const randomNum = Math.floor(Math.random() * 9999) + 1;
        this.elements.quotationIncidents().should('be.visible').type(randomNum)
        this.elements.registrationInputFiled().should('be.visible').type(randomNum)
        this.elements.mileageInputField().should('be.visible').type(randomNum)
        this.elements.parkinglocationDropDown().should('be.visible').select('Locked Garage')
    }

    clickSaveQuotationBtn() {
        this.elements.saveQuotationBtn().should('be.visible').click()
    }

    checkMessageContainsText(txt) {
        this.elements.quotationSucessMessage().contains(txt).should('be.visible')
    }

    clickRetrieveBtn() {
        this.elements.retrieveBtn().should('be.visible').click()
    }

    enterIdentificationNumber() {
        this.elements.identificationNumberInputField().type('12345')

    }

}
module.exports = new QuotationPage();