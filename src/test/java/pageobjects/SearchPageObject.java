package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SearchPageObject {

    protected WebDriver browser;
    protected WebDriverWait webDriver;

    public SearchPageObject(WebDriver browser) {
        this.browser = browser;
    }

    public void searchForTheProduct(String product) throws Exception {
        browser.findElement(By.id("com.sahibinden:id/browsing_activity_featured_classifieds_text_view_search"))
                .click();
        browser.findElement(By.id("com.sahibinden:id/search_src_text")).sendKeys(product);

        browser.findElement(By.id("com.sahibinden:id/util_primary_text")).click();
        webDriver.wait(2);
        if (browser.findElement(By.id("com.sahibinden:id/sahibinden_dialog_fragment_linear_layout_button")).isDisplayed()){
            browser.findElement(By.id("com.sahibinden:id/sahibinden_dialog_fragment_linear_layout_button")).click();
        }
        webDriver.wait(2);
        if (browser.findElement(By.id("com.android.packageinstaller:id/permission_allow_button")).isDisplayed()) {
            browser.findElement(By.id("com.android.packageinstaller:id/permission_allow_button")).click();
        }
        webDriver.wait(2);
        if (browser.findElement(By.id("com.sahibinden:id/showcase_button")).isDisplayed()){
            browser.findElement(By.id("com.sahibinden:id/showcase_button")).click();
        }
        webDriver.wait(2);
        browser.findElement(By.id("com.sahibinden:id/browsing_category_search_result_item_linear_layout")).click();
        webDriver.wait(2);
        browser.findElement(By.id("com.sahibinden:id/add_to_favorites")).click();
    }

    public void goToHomePage() throws Exception {
        browser.findElement(By.xpath("//android.widget.ImageButton[@content-desc=\"Gezinti bölmesini aç\"]")).click();
        browser.findElement(By.id("com.sahibinden:id/myAccountActivityToolbar")).click();

    }
}
