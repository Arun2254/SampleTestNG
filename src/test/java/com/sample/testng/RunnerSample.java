package com.sample.testng;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * Created by nisum on 7/8/17.
 */
@CucumberOptions(features = "src/test/resources/com.sample.testng/testsample.feature", format = { "pretty",
        "html:target/site/cucumber-pretty",
        "rerun:target/rerun.txt",
        "json:target/cucumber1.json" })
public class RunnerSample extends AbstractTestNGCucumberTests {
}
    