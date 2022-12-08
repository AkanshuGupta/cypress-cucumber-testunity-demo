Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the guru99 login page

    Scenario: Login failure with wrong password
        When A user enters the username "standard_user", the password " ", and clicks on the login button
        Then The error message "Enter your Email address and password correct" is displayed

        Scenario: Login failure with wrong username
        When A user enters the username " ", the password "password", and clicks on the login button
        Then The error message "Enter your Email address and password correct" is displayed

    Scenario: Login Success
        When A user enters the username "test@yopmail.com", the password "password", and clicks on the login button
        Then Verify "Signed in as" text is displayed and user is logged in successfully

    Scenario: Logout
        When A user enters the username "test@yopmail.com", the password "password", and clicks on the login button
        Then Verify "Signed in as" text is displayed and user is logged in successfully
        And User clicks on logout button
        Then verify user log out successfully and login page is displayed   