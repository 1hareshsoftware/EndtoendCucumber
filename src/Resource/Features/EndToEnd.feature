@EndToEnd

Feature: I am able to buy a product from "demo.nopcommerce.com"

  Scenario: i am able to navigate the books and i purchase book successfully

    Given I am on book category page
    When I select AtoZ from sort by Dropdown List
    And  I Select 3 books Display per Page
    And I click on first book
    And I click on Add to Cart Button
    And I go to the Shopping Cart
    And I  click on Terms of service box
    And I click on checkout button
    And I click on checkout as guest button
    And I enter text field in first name
    And I enter text field in last name
    And I enter email
    And I enter compnay name
    And I select country from Dropdownlist as "India"
    And I enter city name as
    And I enter my address in Address 1
    And I enter my zipcode
    And I enter phone number
    And I click on continue
    And I select 2nd Day Air option from given 3 option
    And I click on continue
    And I click on Credit card
    And I click on continue
    And I select as visa credit card
    And I enter card holder name
    And I enter 16 digit card number on field
    And I select expiry date & month from Dropdown list
    And I select expiry year from dropdown list
    And I enter 3 digit card Code
    And I click on continue button
    Then I able to processed my order successfully with order number "1034"
