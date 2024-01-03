Feature: Create Account
The user can be able to Create Account


Scenario: Verify that the user be able to create account
Given The user navigated to create account page
 When The user enter fisrt name
 And  The user enter last name
 And  The user enter email
 And  The user enter password
 And  The user confirm password
 When The user click on Creat an account button
 Then The Account should be created successfully
 And "Thank you for registering with Main Website Store." message will be shown
