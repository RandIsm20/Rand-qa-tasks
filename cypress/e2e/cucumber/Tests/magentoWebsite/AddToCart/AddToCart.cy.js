import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AddToCartAssertions from "../../../../../pageObjects/AddToCartPage/assertions.cy";
import AddToCartActions from "../../../../../pageObjects/AddToCartPage/actions.cy";
import sharedPage from "../../../../../shared/actions.cy";



const AddToCartPageAssertions = new AddToCartAssertions();
const AddToCartPageActions = new AddToCartActions();
const sharedPageActions = new sharedPage
const url = "https://magento.softwaretestingboard.com/";

Given("The user navigated to magento website",()=>{
sharedPageActions.openMagentoWebsite(url);
}
);

When("The user search for shirt product",()=>{
  AddToCartPageActions.searchForShirtProduct();
});

When("The user choose the product X",() => {
  AddToCartPageActions.chooseTheProduct();
});

When("The user choose the size for product",() => {
    AddToCartPageActions.chooseSizeForProduct();
  }
);

When("The user choose the color for product",() => {
  
  AddToCartPageActions.chooseColorForProduct();
}
);


When("The user click on Add to cart button",()=>{
  AddToCartPageActions.clickOnAddToCartButton();
}

);

Then("The product should be added to the cart successfully",() => {
    AddToCartPageAssertions.productAddedToCartSuccessfully();
  }
);

Then("The counter of the cart should be visible",()=> {
  AddToCartPageAssertions.counterOfTheCartVisible();
});
