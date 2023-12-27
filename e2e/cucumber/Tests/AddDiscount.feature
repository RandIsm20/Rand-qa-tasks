
Feature: Add new discount
    
     The user can be able to add new discount

    Scenario: Verify that the user can add new discount
        Given The user navigated to nopCommerce website
        When  The user click on discount from promotions
        And   The user click on add new button
        And   The user check active 
        And   The user Enter the name
        And   The user select discount type
        And   The user select the use percentage
        And   The user enter the discount percentage
        And   The user select the coupon code
        And   The user enter the coupon code 
        And   The user click on save button for new discount
        Then  The new discount added successfully



#  Scenario: Verify that the user can add new affiliates
#         Given The user navigated to nopCommerce website
#         Then  The user choose affiliates
#         When  The user click on add new button
#         And   The user fill the required field for new affiliate
#         And   The user click on save button for new affiliate 
#         Then  The new affiliate added successfully



#  Scenario: Verify that the user can add new campaigns
#         Given The user navigated to nopCommerce website
#         Then  The user choose campaigns
#         When  The user click on add new button
#         And   The user fill the required field for new campaigns
#         And   The user click on save button for new campaigns
#         Then  The new campaigns added successfully