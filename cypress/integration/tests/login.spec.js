/// <reference types = "Cypress" />

import { LoginPage, DashboardPage } from "../../page-objects";
import { johnSmith, randomUser } from "../../data";

describe("Login Test Suite", () => {
    let loginPage, dashboardPage;

    before(() => {
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
    })

    beforeEach(() => {
        cy.viewport(1024, 768);
        cy.log("Using 1024 * 768 screen size");
        loginPage.visit;
    });

    it("Login with correct credentials should be successful", () => {
        loginPage.pageHeading.contains("Admin area demo");
        loginPage.enterEmail(johnSmith.email);
        loginPage.enterPassword(johnSmith.password);
        loginPage.loginButton.click();
        cy.title().should("eq", dashboardPage.title);
        cy.url().should("include", "/admin");
        dashboardPage.accountInfo.contains(`${johnSmith.firstName} ${johnSmith.lastName}`);
        dashboardPage.logoutButton.click();
        cy.title().should("eq", loginPage.title);
    });

    it("Login with invalid credentials should not be successful", () => {
        loginPage.enterEmail(randomUser.email);
        loginPage.enterPassword(randomUser.password);
        loginPage.loginButton.click();
        loginPage.loginError.contains("Login was unsuccessful. Please correct the errors and try again.");
    });
});