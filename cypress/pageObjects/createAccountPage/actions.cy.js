class createAccountActions {

  typeInFirstNameInputField() {
    cy.get("#firstname").clear().type("Rand");
    return this;
  }
  typeInLastNameInputField() {
    cy.get("#lastname").clear().type("Ismail");
    return this;
  }

  typeInEmailInputField() {
    cy.get("#email_address").clear().type("randsmail2@gmail.com");
    return this;
  }

  typeInPasswordInputField() {
    cy.get("#password").clear().type("246810Rand//**");
    return this;
  }

  typeInPasswordConfirmInputField() {
    cy.get("#password-confirmation").clear().type("246810Rand//**");
    return this;
  }

  clickOnCreateAnAccountButton() {
    cy.contains("button","Create an Account").click();
    cy.wait(500)
    return this;
  }
}
export default createAccountActions;
