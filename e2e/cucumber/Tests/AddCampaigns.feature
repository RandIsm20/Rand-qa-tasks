

Feature: Add new campaigns
    
     The user can be able to add new campaigns



  Scenario: Verify that the user can add new campaigns
        Given The user navigated to nopCommerce website
        When  The user choose campaigns from promotions
        And   The user click on add new button
        And   The user enter the name
        And   The user enter the subject
        And   The user enter the body
        And   The user enter the planned date of sending
        And   The user select the limited to store
        And   The user select the limited to customer role
        And   The user click on save button for new campaigns
        Then  The new campaigns added successfully