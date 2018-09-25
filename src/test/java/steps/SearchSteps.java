package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import library.BaseSteps;
import pageobjects.SearchPageObject;


public class SearchSteps extends BaseSteps {

    private BaseSteps base;
    SearchPageObject searchPageObject;

    public SearchSteps(BaseSteps base) {
        this.base = base;
    }


    @And("^I search for the \"([^\"]*)\" product$")
    public void iSearchForTheProduct(String product) throws Throwable {
        searchPageObject.goToHomePage();
        searchPageObject.searchForTheProduct(product);
    }

    @And("^I add the product to favourites$")
    public void iAddTheProductToFavourites() throws Throwable {

    }

    @Then("^The product should be added to favourite$")
    public void theProductShouldBeAddedToFavourite() throws Throwable {

    }
}
