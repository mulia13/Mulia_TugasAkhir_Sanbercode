/// <reference types="cypress" />

import LoginPage from "../pom/Login.cy";

describe('Testing Login Feature', () => {
    it('User Login with valid credentials', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        LoginPage.verifyLoginPage().should('have.text', 'Login');
        //Input username dan password valid
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().type('admin123');
        // cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionsummary');
        cy.intercept('GET','**/action-summary').as('actionsummary');
        LoginPage.buttonSubmit().click();
        cy.wait('@actionsummary').then((intercept) =>{
            expect(intercept.response.statusCode).to.equal(200);
        });
        LoginPage.dashboardPage().should('have.text', 'Dashboard');
    });
    it('User Login with invalid username dan invalid password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        LoginPage.verifyLoginPage().should('have.text', 'Login');
        LoginPage.inputUsername().type('Yuga13');
        LoginPage.inputPassword().type('yuga123');
        // cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        cy.intercept('GET','**/messages').as('messages');
        LoginPage.buttonSubmit().click();
        cy.wait('@messages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        LoginPage.invalidCredentials().should('have.text', 'Invalid credentials');
    });

    it('User Login with valid username dan invalid password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        LoginPage.verifyLoginPage().should('have.text', 'Login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().type('yuga1234');
        // cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        cy.intercept('GET','**/messages').as('messages');
        LoginPage.buttonSubmit().click();
        cy.wait('@messages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        LoginPage.invalidCredentials().should('have.text', 'Invalid credentials');
    });

    it('User Login with invalid username dan valid password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        LoginPage.verifyLoginPage().should('have.text', 'Login');
        LoginPage.inputUsername().type('admin12');
        LoginPage.inputPassword().type('admin123');
        // cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        cy.intercept('GET','**/messages').as('messages');
        LoginPage.buttonSubmit().click();
        cy.wait('@messages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        LoginPage.invalidCredentials().should('have.text', 'Invalid credentials');
    });

    it('User Login with empty username dan valid password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        LoginPage.verifyLoginPage().should('have.text', 'Login');
        LoginPage.inputUsername().clear();
        LoginPage.inputPassword().type('admin123');
        LoginPage.buttonSubmit().click();
        LoginPage.requiredRequired().should('have.text', 'Required');
    });

    it('User Login with valid username dan empty password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        LoginPage.verifyLoginPage().should('have.text', 'Login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().clear();
        LoginPage.buttonSubmit().click();
        LoginPage.requiredRequired().should('have.text', 'Required');
    });

    it('User Login with empty username dan empty password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        LoginPage.verifyLoginPage().should('have.text', 'Login');
        LoginPage.inputUsername().clear('');
        LoginPage.inputPassword().clear('');
        LoginPage.buttonSubmit().click();
        LoginPage.requiredRequired().should('contain.text', 'Required');
    });

    it('User Login Forgot your password link navigation is working', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        LoginPage.verifyLoginPage().should('have.text', 'Login');
        LoginPage.buttonForgotPass().click();
        //validasi halaman reset password       
        LoginPage.inputUsername().type('Admin');
        LoginPage.resetPasswordPage().should('have.text', 'Reset Password');
        // cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        cy.intercept('GET','**/messages').as('messages');
        LoginPage.buttonSubmit().click();
        cy.wait('@messages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        LoginPage.succesResetPass().should('have.text', 'Reset Password link sent successfully');
    });
});