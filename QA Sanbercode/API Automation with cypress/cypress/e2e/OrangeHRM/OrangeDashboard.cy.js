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
    it('Search Functionality in Sidebar of Orange HRM', () => {
        //Search Admin
        cy.get('input[placeholder="Search"]').type('Admin');
    
    });

    it('Close Button Menu Sidebar', () => {
        //Close Button
        cy.get('button[class="oxd-icon-button oxd-main-menu-button"]').click();
    });

    it('Upgrade Feature in Orange HRM', () => {
        cy.get('button[class="oxd-glass-button orangehrm-upgrade-button"]').click();
        
    });

    it('Testing -About- Section of Orange HRM Application', () => {
        cy.get('[class="oxd-userdropdown-tab"]').click();
        //Masuk ke halaman about
        cy.get('[class="oxd-userdropdown-link"]').contains('About').click();
        cy.get('h6').contains('About').should('have.text', 'About');
    });

    it('Testing -Support- Section of Orange HRM Application', () => {
        cy.get('[class="oxd-userdropdown-tab"]').click();
        //Masuk ke halaman Support
        cy.get('[class="oxd-userdropdown-link"]').contains('Support').click();
        cy.get('h6').contains('Getting Started with OrangeHRM').should('have.text', 'Getting Started with OrangeHRM');
    });

    it('Testing Change Password Section of Orange HRM Application', () => {
        cy.get('[class="oxd-userdropdown-tab"]').click();
        //Masuk ke halaman Change Password
        cy.get('[class="oxd-userdropdown-link"]').contains('Change Password').click();
        cy.get('h6').contains('Update Password').should('have.text', 'Update Password');
    });

    it('Testing Logout Section of Orange HRM Application', () => {
        cy.get('[class="oxd-userdropdown-tab"]').click();
        
        cy.get('[class="oxd-userdropdown-link"]').contains('Logout').click();
        cy.get('h5').contains('Login').should('have.text', 'Login');        
    });

    it('Testing Quick Launch -Assign Leave- in Orange HRM', () => {
        //Masuk ke halaman Assign Leave
        cy.get('button[title="Assign Leave"]').click();
    });

    it('Testing Quick Launch -Leave List- in Orange HRM', () => {
        //Masuk ke halaman Leave List
        cy.get('button[title="Leave List"]').click();
    });

    it('Testing Quick Launch -Timesheets- in Orange HRM', () => {
        //Masuk ke halaman Timesheets
        cy.get('button[title="Timesheets"]').click();
    });

    it('Testing Quick Launch -Apply Leave- in Orange HRM', () => {
        //Masuk ke halaman Apply Leave
        cy.get('button[title="Apply Leave"]').click();
    });

    it('Testing Quick Launch -My Leave- in Orange HRM', () => {
        //Masuk ke halaman My Leave
        cy.get('button[title="My Leave"]').click();
    });

    it('Testing Quick Launch -My Timesheet- in Orange HRM', () => {
        //Masuk ke halaman My Timesheet
        cy.get('button[title="My Timesheet"]').click();
    });

    it('Testing My Actions -Pending Self Review- in Orange HRM', () => {
        //Masuk ke halaman Pending Self Review
        cy.get('button[class="oxd-icon-button oxd-icon-button--danger orangehrm-report-icon"]').click();
        cy.get('[class="oxd-topbar-body-nav-tab-item"]').contains('Manage Reviews ').click();

        //Masuk ke My Review
        cy.get('[class="oxd-topbar-body-nav-tab-link"]').contains('My Reviews').click();
        // cy.get('h6').contains('My Reviews').should('have.text', 'My Reviews');
    });

    it('Testing My Actions -Candidate to Interview- in Orange HRM', () => {
        //Masuk ke halaman Candidate to Interview
        cy.get('button[class="oxd-icon-button oxd-icon-button--info orangehrm-report-icon"]').click();

        //Menampilkan halaman Candidates
        cy.get('h5').contains('Candidates').should('have.text', 'Candidates');
    });

    it('Testing Time at Work -Punch In- in Orange HRM', () => {
        //Masuk ke halaman Punch In
        cy.get('button[class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"]').click();

        //Menampilkan halaman Punch In
        // cy.get('h6').contains('Punch In').should('have.text', 'Punch In');
    });

    it('Testing Buzz Latest Posts in Orange HRM', () => {
        //Masuk ke halaman Buzz
        cy.get('[class="orangehrm-buzz-widget-header"]').eq(0).click();

        //Menampilkan halaman Buzz Newsfeed
        cy.get('p').contains('Buzz Newsfeed').should('have.text', 'Buzz Newsfeed');
    });
});