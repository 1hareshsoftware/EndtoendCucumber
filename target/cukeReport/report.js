$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resource/Features/EndToEnd.feature");
formatter.feature({
  "line": 3,
  "name": "I am able to buy a product from \"demo.nopcommerce.com\"",
  "description": "",
  "id": "i-am-able-to-buy-a-product-from-\"demo.nopcommerce.com\"",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EndToEnd"
    }
  ]
});
formatter.before({
  "duration": 11420722600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "i am able to navigate the books and i purchase book successfully",
  "description": "",
  "id": "i-am-able-to-buy-a-product-from-\"demo.nopcommerce.com\";i-am-able-to-navigate-the-books-and-i-purchase-book-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on book category page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select AtoZ from sort by Dropdown List",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Select 3 books Display per Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on first book",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I go to the Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I  click on Terms of service box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on checkout as guest button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter text field in first name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter text field in last name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter compnay name",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select country from Dropdownlist as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter city name as",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter my address in Address 1",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter my zipcode",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter phone number",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select 2nd Day Air option from given 3 option",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Credit card",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select as visa credit card",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter card holder name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter 16 digit card number on field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select expiry date \u0026 month from Dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select expiry year from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter 3 digit card Code",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I able to processed my order successfully with order number \"1034\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_am_on_book_category_page()"
});
formatter.result({
  "duration": 94685900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_select_AtoZ_from_sort_by_Dropdown_List()"
});
formatter.result({
  "duration": 45602437300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.id: termsofservice (tried for 40 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat org.example.Utils$utils.waitForElementToBevisible(Utils.java:62)\r\n\tat org.example.EndToEnd.Bookss(EndToEnd.java:55)\r\n\tat org.example.MyStepDef.i_select_AtoZ_from_sort_by_Dropdown_List(MyStepDef.java:19)\r\n\tat ✽.When I select AtoZ from sort by Dropdown List(src/Resource/Features/EndToEnd.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#termsofservice\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-B357CNI\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\HARESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58677}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a46557c2f523ed3901bd4b1d48f35232\n*** Element info: {Using\u003did, value\u003dtermsofservice}\r\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat org.example.Utils$utils.waitForElementToBevisible(Utils.java:62)\r\n\tat org.example.EndToEnd.Bookss(EndToEnd.java:55)\r\n\tat org.example.MyStepDef.i_select_AtoZ_from_sort_by_Dropdown_List(MyStepDef.java:19)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "MyStepDef.i_Select_books_Display_per_Page(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_first_book()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_Add_to_Cart_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_go_to_the_Shopping_Cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_Terms_of_service_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_checkout_as_guest_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_enter_text_field_in_first_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_enter_text_field_in_last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_enter_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_enter_compnay_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 39
    }
  ],
  "location": "MyStepDef.i_select_country_from_Dropdownlist_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_enter_city_name_as()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "MyStepDef.i_enter_my_address_in_Address(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_enter_my_zipcode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_enter_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 39
    }
  ],
  "location": "MyStepDef.i_select_nd_Day_Air_option_from_given_option(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_Credit_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_select_as_visa_credit_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_enter_card_holder_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 8
    }
  ],
  "location": "MyStepDef.i_enter_digit_card_number_on_field(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_select_expiry_date_month_from_Dropdown_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_select_expiry_year_from_dropdown_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    }
  ],
  "location": "MyStepDef.i_enter_digit_card_Code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1034",
      "offset": 61
    }
  ],
  "location": "MyStepDef.i_able_to_processed_my_order_successfully_with_order_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 26200,
  "status": "passed"
});
});