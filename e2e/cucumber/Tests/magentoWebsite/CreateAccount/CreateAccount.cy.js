import {   Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import createAccountActions from "../../../../../pageObjects/createAccountPage/actions.cy";
import createAccountAssertions from "../../../../../pageObjects/createAccountPage/assertions.cy";


const creatAccountPageAction = new createAccountActions();
const creatAccountPageAssertion = new createAccountAssertions();





Given("The user navigated to create account page",()=>{
   
    creatAccountPageAction.openMagentoWebsite(); 
});



 When("The user enter fisrt name",()=>{

 creatAccountPageAction.typeInFirstNameInputField();


});

 When("The user enter last name",()=>{

   creatAccountPageAction.typeInLastNameInputField();


});

When("The user enter email",()=>{

   creatAccountPageAction.typeInEmailInputField();


 });

 When("The user enter password",()=>{

   creatAccountPageAction.typeInPasswordInputField();


});

When("The user confirm password",()=>{

  creatAccountPageAction.typeInPasswordConfirmInputField();


});


When("The user click on Creat an account button",()=>{

   creatAccountPageAction.clickOnCreateAnAccountButton();
}
);

Then("The Account should be created successfully",(url)=>{
    creatAccountPageAssertion.checkTheUrlEqualValue(url);
    creatAccountPageAssertion.checkTheUrlEqualValue();

})
Then("{string} message will be shown",(msg)=>{

    creatAccountPageAssertion.checkAlertMessage(msg);
})
