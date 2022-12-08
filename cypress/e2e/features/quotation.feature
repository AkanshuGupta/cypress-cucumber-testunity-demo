Feature: Quotation page

    send request and Retrieve Quotation functionality

    Background:
        Given A web browser is at the guru99 login page
        When A user enters the username "test@yopmail.com", the password "password", and clicks on the login button
        Then Verify "Signed in as" text is displayed and user is logged in successfully

    
    Scenario: Request Quotation
     And user clicks on Request Quotation tab
     Then Verify Request a quotation paget is displayed
     And user fill Request Quotation from
     Then user clicks on Save Quotation button
     Then verify Request Quotation saved successfully

    Scenario: Retrieve Quotation
     When user clicks on Retrieve Quotation tab
     Then Verify Retrieve page is displayed
     Then user enter indentification number
     And clicks on Retrieve button
     Then verify Retrieve Quotation details is displayed
     