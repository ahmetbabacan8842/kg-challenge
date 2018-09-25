package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        glue = "steps",
        features = "src/test/java/resources",
        monochrome = true,
        plugin = {"pretty", "html:target/kgteknoloji", "json:target/kgteknoloji.json"}
)
public class RunCucumberTest {
}
