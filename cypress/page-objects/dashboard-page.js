/// <reference types = "Cypress" />

//Created the dashboard page object. More elements and actions can be added here
class DashboardPage {

    visit() {
        cy.visit("/admin");
        cy.log('Visited admin page');
    };

    title() {
        const pageTitle = "Dashboard / nopCommerce administration";
        return pageTitle;
    };

    pageHeader() {
        const pageHeader = cy.get(`.content-header > h1`);
        return pageHeader;
    };

    accountInfo() {
        const accountName = cy.get(`.account-info`);
        return accountName;
    };

    clickLogout() {
        const logoutButton = cy.get('a[href*="logout"]');
        logoutButton.click();
        cy.log('Clicked logout button');
    };

};

export default DashboardPage;