/// <reference types = "Cypress" />

export class DashboardPage {
    title = "Dashboard / nopCommerce administration";
    get visit() { return cy.visit("/admin") };
    get pageHeader() { return cy.get(`.content-header > h1`) };
    get accountInfo() { return cy.get(`.account-info`) };
    get logoutButton() { return cy.get('a[href*="logout"]') };
};