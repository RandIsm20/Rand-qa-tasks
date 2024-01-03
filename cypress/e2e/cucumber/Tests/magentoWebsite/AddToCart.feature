
Feature: Add product to cart functionality
 the user can add product to cart successfully


    Scenario: Verify that the user can add product to cart successfully
        Given The user navigated to magento website
        And The user search for shirt product
        When The user choose the product X
        And The user choose the size for product 
        And The user choose the color for product 
        When The user click on Add to cart button
        Then The product should be added to the cart successfully
        And The counter of the cart should be visible
