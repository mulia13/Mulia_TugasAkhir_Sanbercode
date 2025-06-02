/// <reference types="cypress" />

describe('Testing Login Feature', () => {
    it('User Login with valid credentials', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        cy.get('h5').contains('Login').should('have.text', 'Login');
        //Input username dan password valid
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('have.text', 'Dashboard');
    });
    it('User Login with invalid username dan invalid password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        cy.get('h5').contains('Login').should('have.text', 'Login');
        cy.get('[name="username"]').type('Yuga13');
        cy.get('[name="password"]').type('yuga123');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials');
    });

    it('User Login with valid username dan invalid password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        cy.get('h5').contains('Login').should('have.text', 'Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('yuga1234');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials');
    });

    it('User Login with invalid username dan valid password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        cy.get('h5').contains('Login').should('have.text', 'Login');
        cy.get('[name="username"]').type('admin12');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials');
    });

    it('User Login with empty username dan valid password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        cy.get('h5').contains('Login').should('have.text', 'Login');
        cy.get('[name="username"]').clear();
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text', 'Required');
    });

    it('User Login with valid username dan empty password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        cy.get('h5').contains('Login').should('have.text', 'Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text', 'Required');
    });

    it('User Login with empty username dan empty password', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        cy.get('h5').contains('Login').should('have.text', 'Login');
        cy.get('[name="username"]').clear('');
        cy.get('[name="password"]').clear('');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('contain.text', 'Required');
    });

    it('User Login Forgot your password link navigation is working', () => {
        //kunjungi halasan url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //validasi halaman login
        cy.get('h5').contains('Login').should('have.text', 'Login');
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click();
        //validasi halaman reset password
        cy.get('h6').contains('Reset Password').should('have.text', 'Reset Password');
        cy.get('[name="username"]').type('Admin132');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Reset Password link sent successfully').should('have.text', 'Reset Password link sent successfully');
    });
});