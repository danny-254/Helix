$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AudienceBuilder.feature");
formatter.feature({
  "line": 1,
  "name": "Helix Audience Builder",
  "description": "",
  "id": "helix-audience-builder",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "User on the Home page of Audience Builder",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Home Page  of Audience Builder",
  "keyword": "Given "
});
formatter.match({
  "location": "AudienceBuilder.user_is_on_the_Home_Page_of_Audience_Builder()"
});
formatter.result({
  "duration": 35795847100,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify New Audience button is functional",
  "description": "",
  "id": "helix-audience-builder;verify-new-audience-button-is-functional",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@ABTC1-6"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User is on the new attribute home page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User click on the new attribute",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});