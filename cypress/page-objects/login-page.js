/// <reference types = "Cypress" />

//Created the login page object. More elements and actions can be added here
export class LoginPage {
    title = "Your store. Login";
    get visit () { return cy.visit("/login") };
    get emailField () { return cy.get('[id = Email]') };
    get passwordField () { return cy.get('[id = Password]') };
    get loginButton () { return cy.get(".button-1") };
    get emailError () { return cy.get('[id = Email-error]') };
    get pageHeading () { return cy.get(".page-title > h1") };
    get loginError () { return cy.get(".message-error") };

    enterEmail(value) {
        this.emailField.clear();
        this.emailField.type(value);
        return this;
    };

    enterPassword(value) {
        this.passwordField.clear();
        this.passwordField.type(value);
        return this;
    };
};