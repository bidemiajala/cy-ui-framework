import { LoginPage, DashboardPage } from '../../page-objects';
import { johnSmith, randomUser } from '../../data';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login Test Suite', () => {
    beforeEach(() => {
        cy
            .visit(loginPage.url)
            .get(loginPage.emailField).clear()
            .get(loginPage.passwordField).clear();
    });

    it('Login with correct credentials should be successful', () => {
        cy
            .get(loginPage.pageHeading)
            .should('contain', 'Admin area demo')
            .get(loginPage.welcomeMessage)
            .should('exist')
            .and('contain', 'Welcome, please sign in!')
            .get(loginPage.emailField)
            .type(johnSmith.email)
            .get(loginPage.passwordField)
            .type(johnSmith.password)
            .get(loginPage.loginButton)
            .click()
            .title().should('eq', dashboardPage.title)
            .url().should('include', '/admin')
            .get(dashboardPage.accountInfo).should('exist')
            .and('contain', `${johnSmith.firstName} ${johnSmith.lastName}`)
            .get(dashboardPage.logoutButton).click()
            .title().should('contain', loginPage.title);
    });

    it('Login with invalid credentials should not be successful', () => {
        cy
            .get(loginPage.emailField)
            .type(randomUser.email)
            .get(loginPage.passwordField)
            .type(randomUser.password)
            .get(loginPage.loginButton).click()
            .get(loginPage.loginError)
            .should('contain', 'Login was unsuccessful. Please correct the errors and try again.');
    });

});