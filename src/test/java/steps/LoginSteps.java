package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import library.BaseSteps;
import pageobjects.LoginPageObject;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class LoginSteps extends BaseSteps {

    private BaseSteps base;
    private LoginPageObject loginPage;

    public LoginSteps(BaseSteps base) {
        this.base = base;
        loginPage = new LoginPageObject(base.driver);
    }

    @Given("^I am a user of Sahibinden$")
    public void iAmAUserOfSahibinden() throws Throwable {
        //no-op
    }

    @When("^I log in using valid credentials$")
    public void iLogInUsingValidCredentials() throws Throwable {
        loginPage.navigateTo();
        loginPage.login(config.getUserName(),config.getPassword());
    }

    @Then("^I should be logged in$")
    public void iShouldBeLoggedIn() throws Throwable {
        assertTrue(loginPage.isLoggedIn());
    }

    @And("^I logout$")
    public void iLogout() throws Throwable {
        loginPage.logout();
    }

    @Then("^I should be logout$")
    public void iShouldBeLogout() throws Throwable {
        assertFalse(loginPage.isLoggedIn());
    }
}
