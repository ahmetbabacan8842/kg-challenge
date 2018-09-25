package library;

import org.openqa.selenium.WebDriver;

public class BaseSteps {

    public Config config;
    public WebDriver driver;

    public BaseSteps() {
        config = Config.getInstance();
    }

}
