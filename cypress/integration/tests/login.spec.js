/// <reference types = "Cypress" />

import LoginPage from "../../page-objects/login-page"; //Imports login page object
import DashboardPage from "../../page-objects/dashboard-page"; //Imports dashboard page object
import {johnSmith} from "../../data/users"; //Imports John Smith user from User object
import {randomUser} from "../../data/users"; //Imports Random User from User object

describe("Login Test Suite", () => {

    //Runs before each test case. Sets viewport and visits the page
    beforeEach( () => {
        cy.viewport(1024, 768);
        cy.log("Using 1024 * 768 screen size");
        lp.visit();
    });

    const lp = new LoginPage();  //lp is shortform for Login Page object
    const dp = new DashboardPage(); // dp is shortform for Dashboard Page Object

    //Logs the user in, verifies page title and account info, logs out, then verifies page title again
    it("Login with correct credentials should be successful", () => {
        lp.pageHeading().contains("Admin area demo");
        lp.enterEmail(johnSmith.email);
        lp.enterPassword(johnSmith.password);
        lp.clickLogin();
        cy.title().should("eq", dp.title());
        cy.url().should("include", "/admin");
        dp.accountInfo().contains(`${johnSmith.firstName} ${johnSmith.lastName}`);
        dp.clickLogout();
        cy.title().should("eq", lp.title());
    });

    //Tries to login with invalid user details
    it("Login with invalid ecredentials should not be successful", () => {
        lp.enterEmail(randomUser.email);
        lp.enterPassword(randomUser.password);
        lp.clickLogin();
        lp.loginError().contains("Login was unsuccessful. Please correct the errors and try again.");
    });

    //Tries to login with invalid user details
    it("Empty credentials should show an error message", () => {
        lp.clickLogin();
        lp.emailError().contains("Please enter your email");
    });
});