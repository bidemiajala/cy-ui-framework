import { LoginPage, DashboardPage } from '../../page-objects';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('I open Nop Commerce login page', () => {
  cy.visit('https://admin-demo.nopcommerce.com');
});

When('I type in', (datatable) => {
  datatable.hashes().forEach((element) => {
    cy
      .get(loginPage.emailField)
      .clear()
      .type(element.email)
      .get(loginPage.passwordField)
      .clear()
      .type(element.password);
  });
});

When('I click on Sign in button', () => {
  cy.get(loginPage.loginButton).click();
});

Then('{string} should be shown', (content) => {
  cy
    .get(dashboardPage.pageHeader)
    .should('contain', content);
});
