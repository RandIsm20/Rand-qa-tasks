import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Given("The user navigated to nopCommerce website",()=>{
    cy.visit("https://admin-demo.nopcommerce.com");
    cy.loginNopcommerce();
   cy.wait(500)


});



When("The user choose affiliates from promotions",()=>{
    cy.get("#nopSideBarPusher").click();
    cy.wait(500)
    cy.get(".nav-sidebar > li:nth-child(5) > a").click();
    cy.wait(500)
    cy.contains("Affiliates").click();
    cy.wait(500)
});

 And("The user click on add new button",()=>{

    cy.get(".btn.btn-primary").contains("Add new").click()
    cy.wait(500)
});


And("The user check active",()=>{

    cy.get("#Active").click() 

});

And("The user enter the first name",()=>{

    cy.get("#Address_FirstName").clear().type("Rand")
   
});


And("The user enter the last name",()=>{

    cy.get("#Address_LastName").clear().type("QA")
   
    

});


And("The user enter the email",()=>{

    cy.get("#Address_Email").clear().type("engrandismail@gmail.com")
  
});




And("The user select the country",()=>{


    cy.get("#Address_CountryId").select("59")
   

});





And("The user enter the region",()=>{

    cy.get("#Address_County").clear().type("Palestine")


});



And("The user enter the city",()=>{

    cy.get("#Address_City").clear().type("Nablus")
});



And("The user enter the adress1",()=>{

    cy.get("#Address_Address1").clear().type("old mosque street")
 
    
});

And("The user enter the postal code",()=>{

    
    cy.get("#Address_ZipPostalCode").clear().type("00970")
   
    

});

And("The user enter the phone number",()=>{

  
    cy.get("#Address_PhoneNumber").clear().type("0597759938")
  
    

});

And("The user enter the Fax number",()=>{

    cy.get("#Address_FaxNumber").clear().type("97092340793")
    

});


And("The user enter the admin comment",()=>{

    cy.get("#AdminComment").clear().type("Rand qa task7")
  
})

 
And("The user click on save button for new affiliate",()=>{

cy.get(".btn.btn-primary").contains("Save").click()
cy.wait(1000)
    
});

Then("The new affiliate added successfully",()=>{

cy.get(".alert.alert-dismissable").should("contain","The new affiliate has been added successfully.")


});



/*
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


});*/