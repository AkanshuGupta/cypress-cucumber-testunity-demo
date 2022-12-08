import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const profilePage = require("../../pages/ProfilePage")

Then("then user clicks on Profile tab", () => {
  profilePage.clickProfileTab()
});

Then("Verify Profile page contains following field", (dataTable) => {
  var propValue;
  dataTable.hashes().forEach(elem => {
    for (var propName in elem) {
      propValue = elem[propName]
      cy.log(elem[propName]);
      profilePage.checkProfilePageContainsTitle(elem[propName])
    }
  });
});

Then("user clicks on Edit Profile tab", () => {
  profilePage.clickEditProfileTab()
});

Then("Verify {string} text is displayed on edit page", (text) => {
  profilePage.checkPageContainsTitle(text)
});

Then("user enter new details in edit profile form and click on Update User button", (dataTable) => {
  const currentTime = Cypress.dayjs().format('DD-MM-YYYY-MM')
  const randomNum = Math.floor(Math.random() * 9999) + 1;
  const surName = `surname-${currentTime}`
  const firstName = `firstName-${currentTime}`
  const street = 'nyc'
  const city = 'New York'
  const county = 'United States'
  const post_code = randomNum
  const phoneNumber = "99" + randomNum + '' + randomNum;
  profilePage.enterValueByInputLableName('Surname', surName)
  profilePage.enterValueByInputLableName('Firstname', firstName)
  profilePage.enterValueByInputLableName('Phone', phoneNumber)
  profilePage.enterAddressByLableName('Street', street)
  profilePage.enterAddressByLableName('City', city)
  profilePage.enterAddressByLableName('County', county)
  profilePage.enterAddressByLableName('Post code', post_code)
  profilePage.clickUpdateUserButton()
});

Then("reload the page and verify all values are saved", () => {
  profilePage.clickProfileTab()
  profilePage.clickEditProfileTab()
  profilePage.checkEditFormIsNotEmpty()
});