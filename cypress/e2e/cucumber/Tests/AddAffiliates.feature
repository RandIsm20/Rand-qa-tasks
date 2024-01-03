



Feature: Add new affiliates
    
     The user can be able to add new affiliates


 Scenario: Verify that the user can add new affiliates
        Given The user navigated to nopCommerce website
        Then  The user choose affiliates from promotions
        When   The user click on add new button
        And   The user check active 
        And   The user enter the first name 
        And   The user enter the last name 
        And   The user enter the email
        And   The user select the country
        And   The user enter the region
        And   The user enter the city
        And   The user enter the adress1
        And   The user enter the postal code
        And   The user enter the phone number
        And   The user enter the Fax number
        And   The user enter the admin comment
        When   The user click on save button for new affiliate 
        Then  The new affiliate added successfully