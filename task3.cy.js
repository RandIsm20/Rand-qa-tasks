/// <reference types="cypress" />

describe("selectors",()=> {

  it('page1',()=>{
      cy.visit("https://demo.productionready.io/#/login");
      cy.get(".text-xs-center.ng-binding").contains("Sign in");
      cy.contains("a","Need an account?")
      cy.get(".form-control.ng-valid-email")
      cy.get(".ng-pristine.ng-valid.ng-valid-email :nth-child(3) .ng-empty")
      cy.contains("button","Sign in")



    });

    it('page2',()=>{
      cy.visit("https://demo.productionready.io/#/");
      cy.get(".navbar-brand.ng-binding")
      cy.get(".nav.navbar-nav :eq(1)")
      cy.get(".nav.navbar-nav :eq(4)")
      cy.get(".banner .container :nth-child(1)")
      cy.get(".banner .container :nth-child(2)")
      cy.get(".feed-toggle .nav-item :eq(1)")
      cy.get(".article-meta favorite-btn").filter(":first")
      cy.get(".article-preview .preview-link").filter(":first").contains("span","Read more...")
      cy.get(".sidebar p")
      cy.get(".sidebar .tag-list :eq(3)")
      cy.get(".sidebar .tag-list :eq(9)")





    });
    it('page3',()=>{
      cy.visit("https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863")
      cy.get(".banner .container h1")
      cy.get(".article-meta :eq(1)")
      cy.get(".article-meta :eq(3)")
      cy.get(".article-meta :eq(4)")
      cy.get(".article-meta .ng-scope .ng-isolate-scope :eq(0)")
      cy.get(".article-meta .ng-isolate-scope :eq(2)")
      cy.get(".ng-binding p")
      cy.get(".tag-list :eq(0)")
      cy.get(".tag-list :eq(3)")



      
      
      


 










    });
  });