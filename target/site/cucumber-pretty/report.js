$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com.sample.testng/testsample.feature");
formatter.feature({
  "line": 1,
  "name": "This is just a test feature",
  "description": "",
  "id": "this-is-just-a-test-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "This is just a test scenario",
  "description": "",
  "id": "this-is-just-a-test-feature;this-is-just-a-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "This is given statement",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "This is And statement",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "This is when statement",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "This is then statement",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleStepDef.this_is_given_statement()"
});
formatter.result({
  "duration": 70690916,
  "status": "passed"
});
formatter.match({
  "location": "SampleStepDef.this_is_And_statement()"
});
formatter.result({
  "duration": 36711,
  "status": "passed"
});
formatter.match({
  "location": "SampleStepDef.this_is_when_statement()"
});
formatter.result({
  "duration": 30067,
  "status": "passed"
});
formatter.match({
  "location": "SampleStepDef.this_is_then_statement()"
});
formatter.result({
  "duration": 34259,
  "status": "passed"
});
});