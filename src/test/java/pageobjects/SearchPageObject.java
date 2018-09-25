package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SearchPageObject {

    protected WebDriver browser;

    public SearchPageObject(WebDriver browser) {
        this.browser = browser;

    }

    public void searchForTheProduct(String product) throws Exception {
        browser.findElement(By.id("com.dmall.mfandroid:id/mainHeaderSearchBox")).click();
        browser.findElement(By.id("com.dmall.mfandroid:id/clearable_edit")).sendKeys(product);
        browser.findElement(By.id("com.dmall.mfandroid:id/lv")).findElement(By.id("com.dmall.mfandroid:id/keywordTV")).click();
    }

    public void goToHomePage() throws Exception {
        browser.findElement(By.id("com.dmall.mfandroid:id/design_menu_item_text")).click();
    }


    public void checkSearchPopUp() throws Exception {
        if (browser.findElement(By.id("com.dmall.mfandroid:id/tooltipCloseImage")).isDisplayed()) {
            browser.findElement(By.id("com.dmall.mfandroid:id/tooltipCloseImage")).click();
        }
    }

    public void chooseTheProductFromList() throws Exception {
        checkSearchPopUp();
        WebElement firstProduct = browser.findElements(By.id("com.dmall.mfandroid:id/searchList")).get(0);
        firstProduct.click();
    }

    public void addProductToFavourite() throws Exception {
        if (browser.findElement(By.id("com.dmall.mfandroid:id/tooltipImageView")).isDisplayed()){
            browser.findElement(By.id("com.dmall.mfandroid:id/tooltipImageView")).click();
        }
        browser.findElement(By.id("com.dmall.mfandroid:id/fab")).click();
    }

    public boolean checkProductFromTheFavourite() throws Exception {
        browser.findElement(By.id("com.dmall.mfandroid:id/wislistInfoText")).isDisplayed();
        return true;
    }
}
