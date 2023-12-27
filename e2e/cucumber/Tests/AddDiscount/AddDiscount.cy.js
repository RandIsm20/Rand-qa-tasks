import {  And, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to nopCommerce website",()=>{
    cy.visit("https://admin-demo.nopcommerce.com");
    cy.loginNopcommerce();
    cy.wait(500)


});

Then("The user click on discount from promotions",()=>{
    cy.get("#nopSideBarPusher").click();
    cy.get(".nav-sidebar > li:nth-child(5) > a").click()
    cy.contains("Discounts").click();
    cy.wait(500)
 
});


   

When("The user click on add new button",()=>{

    cy.get(".btn.btn-primary").contains("Add new").click()
    cy.wait(500)
 
});
 
When("The user check active",()=>{

    cy.get("#IsActive").check()

})

When("The user Enter the name",()=>{

    cy.get("#Name").clear().type("Laptop")
  
    
});
 
When("The user select discount type",()=>{

   
    cy.get("#DiscountTypeId").select("1")
  
    
});

When("The user select the use percentage",()=>{
cy.get("#UsePercentage").click()


});

When("The user enter the discount percentage",()=>{
   
    cy.get(".nested-setting #pnlDiscountPercentage .k-state-default").clear().type("5")
    
    });
    
    When("The user select the coupon code",()=>{
   
        cy.get("#RequiresCouponCode").check()
        
        });
    
     When("The user enter the coupon code",()=>{
   
        cy.get("#CouponCode").type("R2000")
        
        });


 When("The user click on save button for new discount",()=>{

cy.get(".btn.btn-primary").contains("Save").click()
cy.wait(500)

    
});


Then("The new discount added successfully",()=>{

cy.get(".alert.alert-success.alert-dismissable").should("contain","The new discount has been added successfully.")
});
