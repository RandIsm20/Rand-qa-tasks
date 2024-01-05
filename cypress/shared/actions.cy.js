class sharedPage {



    openMagentoWebsite(url) {
        cy.visit(url);
        return this;
      }
    
}

export default sharedPage;