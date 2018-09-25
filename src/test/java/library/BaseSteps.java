package library;

import org.openqa.selenium.WebDriver;

public class BaseSteps {

    protected Config config;
    public WebDriver driver;

    public BaseSteps() {
        config = Config.getInstance();
    }

}
