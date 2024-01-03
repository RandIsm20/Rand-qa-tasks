import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Given("The user navigated to nopCommerce website",()=>{
    cy.visit("https://admin-demo.nopcommerce.com");
    cy.loginNopcommerce();
   cy.wait(500)


});



Then("The user choose affiliates from promotions",()=>{
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


When("The user check active",()=>{

    cy.get("#Active").click() 

});

When("The user enter the first name",()=>{

    cy.get("#Address_FirstName").clear().type("Rand")
   
});


When("The user enter the last name",()=>{

    cy.get("#Address_LastName").clear().type("QA")
   
    

});


When("The user enter the email",()=>{

    cy.get("#Address_Email").clear().type("engrandismail@gmail.com")
  
});




When("The user select the country",()=>{


    cy.get("#Address_CountryId").select("59")
   

});





When("The user enter the region",()=>{

    cy.get("#Address_County").clear().type("Palestine")


});



When("The user enter the city",()=>{

    cy.get("#Address_City").clear().type("Nablus")
});



When("The user enter the adress1",()=>{

    cy.get("#Address_Address1").clear().type("old mosque street")
 
    
});

When("The user enter the postal code",()=>{

    
    cy.get("#Address_ZipPostalCode").clear().type("00970")
   
    

});

When("The user enter the phone number",()=>{

  
    cy.get("#Address_PhoneNumber").clear().type("0597759938")
  
    

});

When("The user enter the Fax number",()=>{

    cy.get("#Address_FaxNumber").clear().type("97092340793")
    

});


When("The user enter the admin comment",()=>{

    cy.get("#AdminComment").clear().type("Rand qa task7")
  
})

 
When("The user click on save button for new affiliate",()=>{

cy.get(".btn.btn-primary").contains("Save").click()
cy.wait(1000)
    
});

Then("The new affiliate added successfully",()=>{

cy.get(".alert.alert-dismissable").should("contain","The new affiliate has been added successfully.")


});

