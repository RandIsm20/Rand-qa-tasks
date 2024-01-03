
Feature: Add new discount
    
     The user can be able to add new discount

    Scenario: Verify that the user can add new discount
        Given The user navigated to nopCommerce website
        Then  The user click on discount from promotions
        When  The user click on add new button
        And   The user check active 
        And   The user Enter the name
        And   The user select discount type
        And   The user select the use percentage
        And   The user enter the discount percentage
        And   The user select the coupon code
        And   The user enter the coupon code 
        When   The user click on save button for new discount
        Then  The new discount added successfully



