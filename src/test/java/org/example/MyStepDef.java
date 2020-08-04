package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDef {

    EndToEnd endtoend = new EndToEnd();


    @Given("^I am on book category page$")
    public void i_am_on_book_category_page() {

    }

    @When("^I select AtoZ from sort by Dropdown List$")
    public void i_select_AtoZ_from_sort_by_Dropdown_List(){
        endtoend.Bookss();
    }

    @When("^I Select (\\d+) books Display per Page$")
    public void i_Select_books_Display_per_Page(int arg1) {
        endtoend.Bookss();
    }

    @When("^I click on first book$")
    public void i_click_on_first_book() {
        endtoend.Bookss();
    }

    @When("^I click on Add to Cart Button$")
    public void i_click_on_Add_to_Cart_Button() {
        endtoend.Bookss();
    }

    @When("^I go to the Shopping Cart$")
    public void i_go_to_the_Shopping_Cart() {
        endtoend.Bookss();
    }

    @When("^I  click on Terms of service box$")
    public void i_click_on_Terms_of_service_box(){
        endtoend.Bookss();
    }

    @When("^I click on checkout button$")
    public void i_click_on_checkout_button() {
        endtoend.Bookss();
    }

    @When("^I click on checkout as guest button$")
    public void i_click_on_checkout_as_guest_button() {
        endtoend.Bookss();
    }

    @When("^I enter text field in first name$")
    public void i_enter_text_field_in_first_name() {
        endtoend.Bookss();
    }

    @When("^I enter text field in last name$")
    public void i_enter_text_field_in_last_name() {
        endtoend.Bookss();
    }

    @When("^I enter email$")
    public void i_enter_email() {
        endtoend.Bookss();
    }

    @When("^I enter compnay name$")
    public void i_enter_compnay_name() {
        endtoend.Bookss();
    }

    @When("^I select country from Dropdownlist as \"([^\"]*)\"$")
    public void i_select_country_from_Dropdownlist_as(String arg1) {
        endtoend.Bookss();
    }

    @When("^I enter city name as$")
    public void i_enter_city_name_as() {
        endtoend.Bookss();
    }

    @When("^I enter my address in Address (\\d+)$")
    public void i_enter_my_address_in_Address(int arg1) {
        endtoend.Bookss();
    }

    @When("^I enter my zipcode$")
    public void i_enter_my_zipcode() {endtoend.Bookss();

    }

    @When("^I enter phone number$")
    public void i_enter_phone_number() {
        endtoend.Bookss();
    }

    @When("^I click on continue$")
    public void i_click_on_continue() {
        endtoend.Bookss();
    }

    @When("^I select (\\d+)nd Day Air option from given (\\d+) option$")
    public void i_select_nd_Day_Air_option_from_given_option(int arg1, int arg2) {
        endtoend.Bookss();
    }

    @When("^I click on Credit card$")
    public void i_click_on_Credit_card() {
        endtoend.Bookss();
    }

    @When("^I select as visa credit card$")
    public void i_select_as_visa_credit_card() {
        endtoend.Bookss();
    }

    @When("^I enter card holder name$")
    public void i_enter_card_holder_name() {
        endtoend.Bookss();
    }

    @When("^I enter (\\d+) digit card number on field$")
    public void i_enter_digit_card_number_on_field(int arg1) {
        endtoend.Bookss();
    }

    @When("^I select expiry date & month from Dropdown list$")
    public void i_select_expiry_date_month_from_Dropdown_list(){
        endtoend.Bookss();
    }

    @When("^I select expiry year from dropdown list$")
    public void i_select_expiry_year_from_dropdown_list() {
        endtoend.Bookss();
    }

    @When("^I enter (\\d+) digit card Code$")
    public void i_enter_digit_card_Code(int arg1) {
        endtoend.Bookss();
    }

    @When("^I click on continue button$")
    public void i_click_on_continue_button() {
        endtoend.Bookss();
    }

    @Then("^I able to processed my order successfully with order number \"([^\"]*)\"$")
    public void i_able_to_processed_my_order_successfully_with_order_number(String arg1) {
        endtoend.Bookss();
    }
}
