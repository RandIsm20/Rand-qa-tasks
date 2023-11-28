/// <reference types="cypress" />

describe('task4', () => {
    it('task4', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get(".field.search .control :eq(0)").clear().type("shirt"+"{enter}");
        cy.get(".products.list li :eq(0)").click();
        //cy.get("#option-label-size-143-item-168").click();
        cy.contains(".swatch-option.text","M").click();
        //cy.get("#option-label-color-93-item-57").click();
        cy.get(".swatch-attribute.color .swatch-attribute-options.clearfix :last-child").click();
        cy.get("#qty").clear().type("3");
        //cy.get("#product-addtocart-button").click();
        cy.contains("button","Add to Cart").click();
        cy.wait(1000);
        

        
    });


})
