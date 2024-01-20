
/// <reference types="cypress" />
       


describe('task6', () => {
   

   
 
    it('Verify that the user can Search and delete product', () => {
    
        const products = ['Laptop12', 'Laptop1'];
        cy.visit("https://admin-demo.nopcommerce.com/");
        cy.loginNopcommerce();
        cy.wait(1500);
   

        cy.get("#nopSideBarPusher").click();
        cy.get(".nav-sidebar > li:nth-child(2) > a").click();
        cy.contains("Products").click();

        cy.wrap(products).each((productName) => {

        cy.contains("Add new").click();
         
        cy.get("#Name").clear().type(productName);
        
       
        cy.get("#product-info .card-tools button").click()
        cy.wait(500)
        cy.get("#product-price-area input").last().clear({force:true}).type("3000",{force:true});

        cy.get("#product-info").find(".fa-plus").parent().click();
        cy.get("[name=save]").click();
        cy.get(".alert-success").should("contain","The new product has been added successfully.")
       
       
        });



     cy.get("#SearchProductName").clear().type("Laptop1");
     cy.get("#search-products").click();
     cy.wait(1000)

    
    cy.get(".mastercheckbox").eq(0).click()
     cy.wait(1000);
     cy.get("#delete-selected").click()
     cy.wait(1000)
    cy.get("#delete-selected-action-confirmation-submit-button").click()
    cy.wait(1000)
   cy.get("#delete-selected-action-confirmation-title").should('contain','Are you sure?')

    

    
    });
    
    
});

  
   


    
