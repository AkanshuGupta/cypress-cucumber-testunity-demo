class homeSaucePage {
  elements = {
    usernameInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("input[name='submit']"),
    errorMessage: () => cy.get('span b'),
    content: () => cy.get('div.content'),
    logoutButton:()=>cy.get('input[value="Log out"]')
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().should('be.visible').click({force:true})
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  checkPageContainsText(text){
    this.elements.content().should('be.visible').contains(text)
  }

  clickLogoutButton(){
    this.elements.logoutButton().should('be.visible').click()
  }

  checkLoginFormIsDisplayed(){
    this.elements.usernameInput().should('be.visible')
    this.elements.passwordInput().should('be.visible')
    this.elements.loginBtn().should('be.visible')
  }
}

module.exports = new homeSaucePage();
