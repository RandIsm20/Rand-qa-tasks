import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Given("The user navigated to nopCommerce website",()=>{
   cy.visit("https://admin-demo.nopcommerce.com");
   cy.loginNopcommerce();
   cy.wait(500)


});


When("The user choose campaigns from promotions",()=>{
    cy.get("#nopSideBarPusher").click();
    cy.wait(500)
    cy.get(".nav-sidebar > li:nth-child(5) > a").click();
    cy.wait(500)
    cy.contains("Campaigns").click();

});

 And("The user click on add new button",()=>{

    cy.get(".btn.btn-primary").contains("Add new").click()
    cy.wait(500)
});


And("The user enter the name",()=>{

    cy.get("#Name").clear().type("Rand")
   

});
 
And("The user enter the subject",()=>{

    cy.get("#Subject").clear().type("QA")
  
});

And("The user enter the body",()=>{

    cy.get("#Body").clear().type("Test")
   


});

And("The user enter the planned date of sending",()=>{

    cy.get(".k-widget.k-datetimepicker #DontSendBeforeDate").clear().type("1/1/2024")
  


});

And("The user select the limited to store",()=>{

    cy.get(".form-group.row #StoreId").select("2")
   
});

And("The user select the limited to customer role",()=>{
    cy.get("#CustomerRoleId").select("1")


});
And("The user click on save button for new campaigns",()=>{

cy.get(".btn.btn-primary").contains("Save").click()
cy.wait(1000)
    
});

Then("The new campaigns added successfully",()=>{

cy.get(".alert.alert-dismissable").should("contain","The new campaign has been added successfully.")


});