
import LoginPage from "../../page-objects/login-page"; //Imports login page object
import DashboardPage from "../../page-objects/dashboard-page"; //Imports dashboard page object

    const lp = new LoginPage();  //lp is shortform for Login Page object
    const dp = new DashboardPage(); // dp is shortform for Dashboard Page Object

Given('I open Nop Commerce login page', () => {
    cy.visit("https://admin-demo.nopcommerce.com")
  });
  
  When('I type in', (datatable) => {
    datatable.hashes().forEach(element => {
        lp.enterEmail(element.email);
        lp.enterPassword(element.password);
        });
    });
  
  When('I click on Sign in button', () => {
    lp.clickLogin();
  });
  
  Then('{string} should be shown', (content) => {
    dp.pageHeader().contains(content);
  });