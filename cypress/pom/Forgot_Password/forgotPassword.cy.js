export default class ForgotPassPage{
    static verifyLoginPage(){
        return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static buttonSubmit(){
        return cy.get('[type="submit"]');
    }
    static buttonForgotPass(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }
    static resetPasswordPage(){
        return cy.get('h6').contains('Reset Password');
    }
    static succesResetPass(){
        return cy.get('h6').contains('Reset Password link sent successfully');
    }
}