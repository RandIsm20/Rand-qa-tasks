@kA-Team @smoke @KAT-26
# Feature: KAT-26 Verify that the user can add product to cart successfully
Feature: Add Promotions
    
     The user should be able to add new Promotions
 @focus
    Scenario: Verify that the user can add new discount
        Given The user navigated to nopCommerce website
        Then  The user choose discount
        When  The user click on add new button
        And   The user fill the required field for new discount
        And   The user click on save button for new discount
        Then  The new discount added successfully



 Scenario: Verify that the user can add new affiliates
        Given The user navigated to nopCommerce website
        Then  The user choose affiliates
        When  The user click on add new button
        And   The user fill the required field for new affiliate
        And   The user click on save button for new affiliate 
        Then  The new affiliate added successfully



 Scenario: Verify that the user can add new campaigns
        Given The user navigated to nopCommerce website
        Then  The user choose campaigns
        When  The user click on add new button
        And   The user fill the required field for new campaigns
        And   The user click on save button for new campaigns
        Then  The new campaigns added successfully