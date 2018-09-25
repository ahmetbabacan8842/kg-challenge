package pageobjects;

import library.Config;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPageObject {

    public WebDriver browser;

    public LoginPageObject(WebDriver browser) {
        this.browser = browser;
    }

    public void navigateTo() {
        browser.findElement(By.xpath("//android.widget.ImageButton[@content-desc=\"Navigate up\"]")).click();
    }

    public void login(String user, String pass)throws Exception{
        browser.findElement(By.id("com.dmall.mfandroid:id/guest_login_button")).click();
        browser.findElement(By.id("com.dmall.mfandroid:id/loginEmailET")).sendKeys(user);
        browser.findElement(By.id("com.dmall.mfandroid:id/loginPassET")).sendKeys(pass);
        browser.findElement(By.id("com.dmall.mfandroid:id/LoginBtn")).click();
    }

    public boolean isLoggedIn() {
        navigateTo();
        String isLoggedIn = browser.findElement(By.id("com.dmall.mfandroid:id/drawer_menu_item_mail")).getText();
        if (isLoggedIn.equalsIgnoreCase(Config.getInstance().getUserName())){
            System.out.println("Successfully Logged In");
        }
        return true;
    }

    public void skip() throws Exception {
        Thread.sleep(3000);
        if (browser.findElement(By.id("com.dmall.mfandroid:id/closeBtn")).isDisplayed()) {
            browser.findElement(By.id("com.dmall.mfandroid:id/closeBtn")).click();
        }
    }
}
