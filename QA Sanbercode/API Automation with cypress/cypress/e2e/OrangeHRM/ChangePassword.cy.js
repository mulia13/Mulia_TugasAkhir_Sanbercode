/// <reference types="cypress" />

describe('Dashboard Tests on Orange HRM Application', () => {

    beforeEach('Before Tests', () => {
        // Kunjungi halaman login dan masuk dengan kredensial yang valid
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('have.text', 'Dashboard');
    });

    it('Testing Change Password in Orange HRM', () => {
        cy.get('[class="oxd-userdropdown-tab"]').click();
        //Masuk ke halaman Change Password
        cy.get('[class="oxd-userdropdown-link"]').contains('Change Password').click();
        cy.get('h6').contains('Update Password').should('have.text', 'Update Password');
        //Ubah Password
        cy.get('input[type="password"]').eq(0).type('admin123');
        cy.get('input[type="password"]').eq(1).type('admin123456789');
        cy.get('input[type="password"]').eq(2).type('admin123456789');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]').should('have.text', 'Successfully Saved');
    });

    it('Testing Change Password in Orange HRM with Invalid Current Password', () => {
        cy.get('[class="oxd-userdropdown-tab"]').click();
        //Masuk ke halaman Change Password
        cy.get('[class="oxd-userdropdown-link"]').contains('Change Password').click();
        cy.get('h6').contains('Update Password').should('have.text', 'Update Password');
        //Ubah Password
        cy.get('input[type="password"]').eq(0).type('admin1233');
        cy.get('input[type="password"]').eq(1).type('admin123456789');
        cy.get('input[type="password"]').eq(2).type('admin123456789');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]').should('have.text', 'Current Password is Incorrect');
        
    });
    
    it('Testing Change Password in Orange HRM with Empty All Label', () => {
        cy.get('[class="oxd-userdropdown-tab"]').click();
        //Masuk ke halaman Change Password
        cy.get('[class="oxd-userdropdown-link"]').contains('Change Password').click();
        cy.get('h6').contains('Update Password').should('have.text', 'Update Password');
        //Kosongkan Password
        cy.get('input[type="password"]').eq(0).clear();
        cy.get('input[type="password"]').eq(1).clear();
        cy.get('input[type="password"]').eq(2).clear();
        cy.get('[type="submit"]').click();

        cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should('have.text', 'Required'); 
        cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should('have.text', 'Required');        
        cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(2).should('have.text', 'Passwords do not match');        
    
    });
});