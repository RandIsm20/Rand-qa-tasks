import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Given("The user navigated to nopCommerce website",()=>{
    cy.visit("https://admin-demo.nopcommerce.com");
    cy.loginNopcommerce();
   cy.wait(500)


});

Then("The user choose discount",()=>{
    cy.get("#nopSideBarPusher").click();
    cy.wait(500)
    cy.get(".nav-sidebar > li:nth-child(5) > a").click();
    cy.wait(500)
    cy.contains("Discounts").click();
    cy.wait(500)
});

 When("The user click on add new button",()=>{

    cy.get(".btn.btn-primary").contains("Add new").click()
    cy.wait(500)
});


When("The user fill the required field for new discount",()=>{

    cy.get("#Name").clear().type("Laptop")
   // cy.get("#DiscountTypeId").select()
    cy.get("#UsePercentage").click()
    cy.wait(500)
    cy.get(".nested-setting #pnlDiscountPercentage .k-state-default").clear().type("5")
    
});
 
When("The user click on save button for new discount",()=>{

cy.get(".btn.btn-primary").contains("Save").click()
cy.wait(500)

    
});


Then("The new discount added successfully",()=>{

cy.get(".alert.alert-success.alert-dismissable").should("contain","The new discount has been added successfully.")
});



Then("The user choose affiliates",()=>{
    cy.get("#nopSideBarPusher").click();
    cy.wait(500)
    cy.get(".nav-sidebar > li:nth-child(5) > a").click();
    cy.wait(500)
    cy.contains("Affiliates").click();
    cy.wait(500)
});

 When("The user click on add new button",()=>{

    cy.get(".btn.btn-primary").contains("Add new").click()
    cy.wait(500)
});


When("The user fill the required field for new affiliate",()=>{

    cy.get("#Active").check()
    cy.get("#Address_FirstName").clear().type("Rand")
    cy.get("#Address_LastName").clear().type("QA")
    cy.get("#Address_Email").clear().type("engrandismail@gmail.com")
    cy.get("#Address_CountryId").select("59")
    cy.get("#Address_County").clear().type("Palestine")
    cy.get("#Address_City").clear().type("Nablus")
    cy.get("#Address_Address1").clear().type("old mosque streer")
    cy.get("#Address_ZipPostalCode").clear().type("00970")
    cy.get("#Address_PhoneNumber").clear().type("0597759938")
    cy.get("#AdminComment").clear().type("Test")

});
 
When("The user click on save button for new affiliate",()=>{

cy.get(".btn.btn-primary").contains("Save").click()
cy.wait(1000)
    
});

Then("The new affiliate added successfully",()=>{

cy.get(".alert.alert-dismissable").should("contain","The new affiliate has been added successfully.")


});




Then("The user choose campaigns",()=>{
    cy.get("#nopSideBarPusher").click();
    cy.wait(500)
    cy.get(".nav-sidebar > li:nth-child(5) > a").click();
    cy.wait(500)
    cy.contains("Campaigns").click();
    cy.wait(500)
});

 When("The user click on add new button",()=>{

    cy.get(".btn.btn-primary").contains("Add new").click()
    cy.wait(500)
});


When("The user fill the required field for new campaigns",()=>{

    cy.get("#Name").clear().type("Rand")
    cy.get("#Subject").clear().type("QA")
    cy.get("#Body").clear().type("Test")
    cy.get(".k-widget.k-datetimepicker #DontSendBeforeDate").clear().type("1/1/2024")
    cy.get(".form-group.row #StoreId").select("2")
    cy.get("#CustomerRoleId").select("1")


});
 
When("The user click on save button for new campaigns",()=>{

cy.get(".btn.btn-primary").contains("Save").click()
cy.wait(1000)
    
});

Then("The new campaigns added successfully",()=>{

cy.get(".alert.alert-dismissable").should("contain","The new campaign has been added successfully.")


});