package com.sample.testng;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by nisum on 7/8/17.
 */
public class SampleStepDef {

    @Given("^This is given statement$")
    public void this_is_given_statement() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("This is Given Statement");
    }

    @Given("^This is And statement$")
    public void this_is_And_statement() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

        System.out.println("This is And Statement");
    }

    @When("^This is when statement$")
    public void this_is_when_statement() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

        System.out.println("This is When Statement");

    }

    @Then("^This is then statement$")
    public void this_is_then_statement() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

        System.out.println("This is Then Statement");

    }



}
