class Profilepage {
    elements = {
        profileTab: () => cy.get("#profile"),
        editProfileTab: () => cy.get('#editprofile'),
        pageTitle: () => cy.get('div h1'),
        profilePageTableTitile: () => cy.get('div p'),
        updateUserBtn: () => cy.get('input[value="Update User"]'),
        userNameInputFiled: () => cy.get('#user_surname'),
        firstNameInputField: () => cy.get('#user_firstname')
    };

    clickProfileTab() {
        this.elements.profileTab().should('be.visible').click()
    }

    clickEditProfileTab() {
        this.elements.editProfileTab().should('be.visible').click()
    }

    checkPageContainsTitle(text) {
        this.elements.pageTitle().contains(text).should('be.visible')
    }

    checkProfilePageContainsTitle(text) {
        this.elements.profilePageTableTitile().contains(text).should('be.visible')
    }

    enterValueByInputLableName(lableName, value) {
        cy.get('div label').contains(lableName).should('be.visible').parent().within(() => {
            cy.get('input').should('be.visible').type(value)
        })
    }
    enterAddressByLableName(lableName, value) {
        cy.get('div b label').contains(lableName).should('be.visible').parent().parent().within(() => {
            cy.get('input').should('be.visible').type(value)
        })

    }

    clickUpdateUserButton() {
        this.elements.updateUserBtn().should('be.visible').click()
    }

    checkEditFormIsNotEmpty() {
        this.elements.userNameInputFiled().should('contain.value', 'surname')
        this.elements.firstNameInputField().should('contain.value', 'firstName')
    }


}
module.exports = new Profilepage();