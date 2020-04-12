/// <reference types = "Cypress" />

//Created the login page object. More elements and actions can be added here
class LoginPage {

    visit() {
        cy.visit("/login")
        cy.log('Visited login page')
    }

    title() {
        const pageTitle = "Your store. Login"
        return pageTitle
    }

    emailError() {
        const emailErrorField = cy.get('[id = Email-error]')
        return emailErrorField
    }

    loginError() {
        const loginErrorMessageField = cy.get(".message-error")
        return loginErrorMessageField
    }

    pageHeading() {
        const pageHeading = cy.get(".page-title > h1")
        return pageHeading
    }

    enterEmail(value) {
        const emailField = cy.get('[id = Email]')
        emailField.clear()
        emailField.type(value)
        cy.log('Entered email')
        return this
    }

    enterPassword(value) {
        const passwordField = cy.get('[id = Password]')
        passwordField.clear()
        passwordField.type(value)
        cy.log('Entered password')
        return this
    }

    clickLogin() {
        const loginButton = cy.get(".button-1")
        loginButton.click()
        cy.log('Clicked login button')
    }

}

export default LoginPage