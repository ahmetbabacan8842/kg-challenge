package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import library.BaseSteps;
import library.Config;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

public class Hooks extends BaseSteps {
    private BaseSteps base;

    public Hooks(BaseSteps base) {
        this.base = base;
    }


    @Before()
    public void setUp() throws MalformedURLException {
        String platform = System.getProperty("platform");

        if (platform == null) {
            platform = Config.getInstance().getPlatform();
        }

        if ("android".equalsIgnoreCase(platform)) {
            /*File appDir = new File(
                    "src/test/java/driver");
            File app = new File(appDir, "sahibinden.apk");*/

            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "android");
            capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "emulator-5554");
            capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "9");
            capabilities.setCapability("appPackage", "com.sahibinden");
            capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "uiautomator2");
            capabilities.setCapability(MobileCapabilityType.APP, "/Users/ahmetbabacan/Projects/kgchallenge/src/test/java/driver/sahibinden.com_com.sahibinden.apk");

            base.driver =  new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
    }
    }

    @After()
    public void after(Scenario scenario) throws IOException {
        if (scenario.isFailed()) {
            File scrFile = ((TakesScreenshot)base.driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(scrFile, new File("target/kg.jpg"));
        }

        for (String winHandle : base.driver.getWindowHandles()) {
            try {
                base.driver.switchTo().window(winHandle);
                base.driver.close();
                base.driver.quit();
            } catch (Exception e) {
            }
        }
    }

    }
