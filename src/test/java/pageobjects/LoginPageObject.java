package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPageObject {

    protected WebDriver browser;
    public LoginPageObject(WebDriver browser) {
        this.browser = browser;
    }

    public void navigateTo(){
        browser.findElement(By.id("com.sahibinden:id/action_account")).click();
    }

    public void login(String user, String pass){
        browser.findElement(By.id("com.sahibinden:id/login_logout_action")).click();
        browser.findElement(By.id("com.sahibinden:id/myaccount_activity_login_username_edittext")).sendKeys(user);
        browser.findElement(By.id("com.sahibinden:id/myaccount_activity_login_password_edittext")).sendKeys(pass);
        browser.findElement(By.id("com.sahibinden:id/myaccount_activity_login_login_action_button")).click();
    }

    public boolean isLoggedIn(){
        return browser.findElements(By.id("com.sahibinden:id/login_logout_action")).size() > 0;
    }

    public void logout(){
        browser.findElement(By.id("com.sahibinden:id/login_logout_action")).click();
        browser.findElement(By.id("android:id/button1")).click();
    }
}
