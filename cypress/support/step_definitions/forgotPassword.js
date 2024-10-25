import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ForgotPassPage from "../../pom/Forgot_Password/forgotPassword.cy";

Given('I visit the URLL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});

Then('I should see the homepagee', () => {
    ForgotPassPage.verifyLoginPage().should('have.text','Login');
});

When('I submit the Usernamee', () => {
    ForgotPassPage.inputUsername().type('Admin');
});

When('I click the button Forgot Passwordd', ()=>{
    ForgotPassPage.buttonForgotPass().click();
});

Then('I verify Reset Password Successs', () => {
    ForgotPassPage.succesResetPass().should('have.text', 'Reset Password link sent successfully');
});

Then('I click the button Reset Passwordd',()=>{
    ForgotPassPage.buttonSubmit().click();
});