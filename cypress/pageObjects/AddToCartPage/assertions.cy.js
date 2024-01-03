class AddToCartAssertions {

  productAddedToCartSuccessfully() {
    
    cy.get("[role=alert]").should("contain","You added Radiant Tee to your shopping cart.");
    cy.wait(5000);
    return this;
  }
  counterOfTheCartVisible() {
    cy.get(".counter-number").should("be.visible");
    return this;
  }
}

export default AddToCartAssertions;
