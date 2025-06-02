import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pom/Login/login.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});

When('I should see the homepage', () => {
    LoginPage.verifyLoginPage().should('have.text','Login');
});

When('I submit the Username', () => {
    LoginPage.inputUsername().type('Admin');
});

When('I submit the Password', () => {
    LoginPage.inputPassword().type('admin123');
});

Then('I click the button Login', () => {
    cy.intercept('GET', '**/action-summary').as('action');
    LoginPage.buttonSubmit().click();
    cy.wait('@action');
});

Then('I verify login success', () => {
    LoginPage.dashboardPage().should('have.text', 'Dashboard')
});

When('I submit the Invalid Username', () => {
    LoginPage.inputUsername().type('Yuga');
});

When('I submit the Invalid Password', () => {
    LoginPage.inputPassword().type('Yuga1234');
}); 

When('I submit the Empty Username', () => {
    LoginPage.inputUsername().clear();
});

When('I submit the Empty Password', () => {
    LoginPage.inputPassword().clear();
});

When('I click the button Forgot Password', ()=>{
    LoginPage.buttonForgotPass().click();
});

Then('I click the button Login Without Intercept', () => {
    LoginPage.buttonSubmit().click();
});

Then('I verify the invalid credentials message', () => {
    LoginPage.invalidCredentials().should('have.text', 'Invalid credentials');
});

Then('I verify the required message', () => {
    LoginPage.requiredRequired().should('have.text', 'Required');
});

Then('I verify the required message contains text', () => {
    LoginPage.requiredRequired().should('contain.text', 'Required');
});
Then('I verify Reset Password Success', () => {
    LoginPage.succesResetPass().should('have.text', 'Reset Password link sent successfully');
});

Then('I click the button Reset Password',()=>{
    LoginPage.buttonSubmit().click();
});