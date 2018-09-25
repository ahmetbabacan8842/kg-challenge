$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "\nAs a user of sahibinden\nIn order to manage web site\nI want to be able to log in to the system",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 26880196949,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027Ahmets-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:10ee:392c:6652:be99%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: AndroidDriver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\n    at JWProxy.command$ (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-base-driver/lib/jsonwp-proxy/proxy.js:371:13)\n    at tryCatch (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:67:40)\n    at GeneratorFunctionPrototype.invoke [as _invoke] (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:315:22)\n    at GeneratorFunctionPrototype.prototype.(anonymous function) [as throw] (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:100:21)\n    at GeneratorFunctionPrototype.invoke (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:136:37)\n    at \u003canonymous\u003e\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:89)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:38)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:83)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:93)\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:72)\n\tat steps.Hooks.setUp(Hooks.java:48)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 7,
  "name": "Log in with valid credentials",
  "description": "",
  "id": "login-functionality;log-in-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am a user of sahibinden",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.iLogInUsingValidCredentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iShouldBeLoggedIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1103123,
  "error_message": "java.lang.NullPointerException\n\tat steps.Hooks.after(Hooks.java:55)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "\nI want to be able to search to the system",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Add product to favourite after search",
  "description": "",
  "id": "search-functionality;add-product-to-favourite-after-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am a user of sahibinden",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I search for the \"\u003cwords\u003e\" product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add the product to favourites",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The product should be added to favourite",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-functionality;add-product-to-favourite-after-search;",
  "rows": [
    {
      "cells": [
        "words"
      ],
      "line": 13,
      "id": "search-functionality;add-product-to-favourite-after-search;;1"
    },
    {
      "cells": [
        "Toyota"
      ],
      "line": 14,
      "id": "search-functionality;add-product-to-favourite-after-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23659905319,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027Ahmets-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:10ee:392c:6652:be99%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: AndroidDriver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\n    at JWProxy.command$ (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-base-driver/lib/jsonwp-proxy/proxy.js:371:13)\n    at tryCatch (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:67:40)\n    at GeneratorFunctionPrototype.invoke [as _invoke] (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:315:22)\n    at GeneratorFunctionPrototype.prototype.(anonymous function) [as throw] (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:100:21)\n    at GeneratorFunctionPrototype.invoke (/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:136:37)\n    at \u003canonymous\u003e\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:89)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:38)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:83)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:93)\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:72)\n\tat steps.Hooks.setUp(Hooks.java:48)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Add product to favourite after search",
  "description": "",
  "id": "search-functionality;add-product-to-favourite-after-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am a user of sahibinden",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I log in using valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I search for the \"Toyota\" product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add the product to favourites",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The product should be added to favourite",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.iLogInUsingValidCredentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 18
    }
  ],
  "location": "SearchSteps.iSearchForTheProduct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchSteps.iAddTheProductToFavourites()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchSteps.theProductShouldBeAddedToFavourite()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 74372,
  "error_message": "java.lang.NullPointerException\n\tat steps.Hooks.after(Hooks.java:55)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
});