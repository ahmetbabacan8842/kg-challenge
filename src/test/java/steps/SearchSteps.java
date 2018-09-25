package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import library.BaseSteps;
import pageobjects.SearchPageObject;


public class SearchSteps extends BaseSteps {

    private BaseSteps base;
    private SearchPageObject searchPageObject;

    public SearchSteps(BaseSteps base) {
        this.base = base;
        searchPageObject = new SearchPageObject(base.driver);
    }

    @And("^I search for the \"([^\"]*)\" product$")
    public void iSearchForTheProduct(String product) throws Throwable {
        searchPageObject.goToHomePage();
        searchPageObject.searchForTheProduct(product);
        searchPageObject.chooseTheProductFromList();
    }

    @And("^I add the product to favourites$")
    public void iAddTheProductToFavourites() throws Throwable {
        searchPageObject.addProductToFavourite();
    }

    @Then("^The product should be added to favourite$")
    public void theProductShouldBeAddedToFavourite() throws Throwable {
        searchPageObject.checkProductFromTheFavourite();
    }
}
