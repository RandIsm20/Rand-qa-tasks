class createAccountAssertions {

 checkTheUrlEqualValue(url){
    cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/");
    return this;
 }

 checkPageTitleContainValue(){
    cy.get(".page-title").should("contain", "My Account");
    return this;
    
 }

checkAlertMessage(msg) {
cy.get("[role=alert]").should("contain",msg)
return this;


}

}

export default createAccountAssertions;