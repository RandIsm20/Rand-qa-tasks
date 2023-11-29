/// <reference types="cypress" />

describe('task5', () => {
    it(' create an account', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.contains("a","Create an Account").click();
        cy.get("#firstname").should("be.visible").and("be.empty").and("have.class","input-text required-entry").and("have.css","background-color","rgb(255, 255, 255)").type("Rand");
        cy.get("#lastname").should("be.visible").and("be.empty").type("Ismail");
        cy.get("#email_address").should("be.visible").and("be.empty").type("randesmaeel88@gmail.com");
        cy.get("#password").should("be.visible").and("be.empty").type("Rand12345");
        cy.get("#password").should("have.attr","data-password-min-length","8").and("have.attr","data-password-min-character-sets","3");
        cy.get("#password-confirmation").should("be.visible").and("be.empty").type("Rand12345");
        cy.get("#password-strength-meter-label").should("be.visible").and("have.attr","data-role");
        cy.contains("button","Create an Account").should("be.visible").and("have.css","background-color","rgb(25, 121, 195)").and("have.css","cursor","pointer").click();
        cy.wait(1000);
        cy.get(".message-success.success.message :first-child").should("have.text","Thank you for registering with Main Website Store."); //Happy Scenario
       // cy.get(".message-error.error.message :eq(0)").should("contain","There is already an account with this email address. If you are sure that it is your email address, "); //an account already exist
        


        
    });


})
