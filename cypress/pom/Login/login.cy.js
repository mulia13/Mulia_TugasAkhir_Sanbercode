export default class LoginPage{
    static verifyLoginPage(){
        return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static buttonSubmit(){
        return cy.get('[type="submit"]');
    }
    static dashboardPage(){
        return cy.get('h6').contains('Dashboard');
    }
    static invalidCredentials(){
        return cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]'); 
    }
    static requiredRequired(){
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]');
    }
}