package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.example.Utils.utils.*;

public class EndToEnd extends Utils{

    LoadProp loadProp = new LoadProp();


   // private By books =By.className("page-title");
    private By SortByBooks= By.id("products-orderby");
    private By DisplayPerPage= By.id("products-pagesize");
    private By clickOnFirstProduct= By.cssSelector("div[class='buttons'] input:nth-child(1)");
    private By shoppingCart = By.cssSelector("a [class='cart-label']");
    private By terms = By.id("termsofservice");
    private By checkout= By.id("checkout");
    private By checkoutGuest = By.cssSelector("input[class='button-1 checkout-as-guest-button']");
    private By firstName = By.id("BillingNewAddress_FirstName");
    private By lastName = By.id("BillingNewAddress_LastName");
    private By email = By.id("BillingNewAddress_Email");
    private By company = By.id("BillingNewAddress_Company");
    private By country = By.id("BillingNewAddress_CountryId");
    private By india = By.cssSelector("#BillingNewAddress_CountryId > option:nth-child(101)");
    private By city = By.id("BillingNewAddress_City");
    private By address1 = By.id("BillingNewAddress_Address1");
    private By address2 = By.id("BillingNewAddress_Address2");
    private By zipPostalCode = By.id("BillingNewAddress_ZipPostalCode");
    private By phoneNumber = By.id("BillingNewAddress_PhoneNumber");
    private By faxNumber = By.id("BillingNewAddress_FaxNumber");
    private By continuePage = By.cssSelector("input[class='button-1 new-address-next-step-button']");
    private By shippingMethod = By.id("shippingoption_2");
    private By shippingContinue = By.cssSelector("input[class='button-1 shipping-method-next-step-button']");
    private By paymentMethod = By.id("paymentmethod_1");
    private By paymentContinue = By.cssSelector("input[class='button-1 payment-method-next-step-button']");
    private By creditCard = By.id("CreditCardType");
    private By visa = By.cssSelector("#CreditCardType > option:nth-child(1)");
    private By cardholderName = By.id("CardholderName");
    private By cardNumber = By.id("CardNumber");
    private By expireMonth = By.cssSelector("#ExpireMonth > option:nth-child(2)");
    private By expireYear = By.cssSelector("#ExpireYear > option:nth-child(4)");
    private By cardCode = By.id("CardCode");
    private By cardDetailsContinue = By.cssSelector("input[class='button-1 payment-info-next-step-button']");
    private By confirm = By.cssSelector("input[class='button-1 confirm-order-next-step-button']");

    public void Bookss () {
        //System.out.println(getTextFromElement(books));
        SelectByVisibleText(SortByBooks, "Name: A to Z");
        SelectByVisibleText(DisplayPerPage, "3");
       waitForElementToBevisible(clickOnFirstProduct,20);
        ClickOnElement(clickOnFirstProduct);
        ClickOnElement(shoppingCart);
        waitForElementToBevisible(terms, 40);
        ClickOnElement(terms);
        ClickOnElement(checkout);
        waitForElementToBevisible(checkoutGuest, 20);
        ClickOnElement(checkoutGuest);
        enterText(firstName, loadProp.getProperty("FirstName"));
        enterText(lastName, loadProp.getProperty("LastName"));
        enterText(email, loadProp.getProperty("Email"));
        enterText(company, loadProp.getProperty("CompanyName"));
        ClickOnElement(country);
        ClickOnElement(india);
        enterText(city, loadProp.getProperty("CityName"));
        enterText(address1, loadProp.getProperty("Address1"));
        enterText(address2, loadProp.getProperty("Address2"));
        enterText(zipPostalCode, loadProp.getProperty("ZipCode"));
        enterText(phoneNumber, loadProp.getProperty("PhoneNumber"));
        enterText(faxNumber, loadProp.getProperty("FaxNumber"));
        ClickOnElement(continuePage);
        waitForElementToBevisible(shippingMethod, 20);
        ClickOnElement(shippingMethod);
        ClickOnElement(shippingContinue);
        waitForElementToBevisible(paymentMethod,20);
        ClickOnElement(paymentMethod);
        ClickOnElement(paymentContinue);
        ClickOnElement(creditCard);
        ClickOnElement(visa);
        enterText(cardholderName, loadProp.getProperty("CardHolderName"));
        enterText(cardNumber, loadProp.getProperty("CardNumber"));
        ClickOnElement(expireMonth);
        ClickOnElement(expireYear);
        enterText(cardCode, loadProp.getProperty("CardCode"));
        ClickOnElement(cardDetailsContinue);
        ClickOnElement(confirm);
    }

}
