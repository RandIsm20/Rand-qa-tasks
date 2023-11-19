
/// <reference types="cypress" />


it("task",()=>{

  cy.visit("https://magento.softwaretestingboard.com/checkout/#shipping");
  /* ==== Generated with Cypress Studio ==== */
  cy.get('#search').clear('s');
  cy.get('#search').type('shirt{enter}');
  cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
  cy.get('#option-label-size-143-item-167').click();
  cy.get('.swatch-attribute.color > .swatch-attribute-options').click();
  cy.get('#option-label-color-93-item-57').click();
  cy.get('#product-addtocart-button > span').click();
  cy.wait(3000);
  cy.get('.showcart').click();
  cy.get('#top-cart-btn-checkout').click();
  cy.wait(5000);

 // cy.get(".step-content .control._with-tooltip input:first-child").click()
 

  cy.get("#customer-email-fieldset, #customer-email").click(); // using id

  cy.get('.control input[name="firstname"]').click();//using class control and first child input and attribute name

  cy.get('.control input[name="lastname"]').click(); // using class control and first child input and attribute name



  cy.get('.control input[name="company"]').click();// using class control and first child input and attribute name
  cy.get('.control input[name="street[0]"]').click();// using class control and first child input and attribute name
 
  cy.get('.control input[name="street[1]"]').click();// using class control and first child input and attribute name

  cy.get('.control input[name="street[2]"]').click();//using class control and first child input and attribute name
 
  cy.get('.control input[name="city"]').click();//using class control and first child input and attribute nameusing class and attribute

  cy.get('.select[name="region_id"]').select(''); //using class select and attribute name
  cy.get('.control input[name="postcode"]').click();//using class control and first child input and attribute name
  cy.get('.select[name="country_id"]').select(''); //using class select and attribute name
  cy.get('.control input[name="telephone"]').click(); //using class control and first child input and attribute name
  cy.get('.radio[name="ko_unique_1"]').click(); //using class radio and attribute name
  cy.get(".button.action.continue.primary").click(); //using classes
  

})
