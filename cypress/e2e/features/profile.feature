Feature: Profile Page

    check and edit the profile page

    Background:
        Given A web browser is at the guru99 login page
        When A user enters the username "test@yopmail.com", the password "password", and clicks on the login button
        Then Verify "Signed in as" text is displayed and user is logged in successfully

    
    Scenario: Profile - check Profile page elements are visible
        And then user clicks on Profile tab
        Then Verify Profile page contains following field
        |Table Title    |
        |Title          |
        |Firstname      |
        |Surname        |
        |Phone          |
        |Dataofbirth    |
        |License type   |
        |License period |
        |Occupation     |
        |Driver History |
        |ADDRESS        |

    Scenario: Edit Profile
        And user clicks on Edit Profile tab
        Then Verify "Editing user profile" text is displayed on edit page
        Then user enter new details in edit profile form and click on Update User button
        And reload the page and verify all values are saved

    
