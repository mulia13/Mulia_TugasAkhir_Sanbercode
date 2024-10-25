import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AdminPage from "../../../pom/Dashboard Admin/dashboardAdmin.cy";

Given('I visit the URL Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(5000);
    AdminPage.verifyLoginPage().should('have.text','Login');
    AdminPage.inputUsername().type('Admin');
    AdminPage.inputPassword().type('admin123');
    cy.intercept('GET', '**/action-summary').as('action');
    AdminPage.buttonSubmit().click();
    cy.wait('@action');
});

When('I see the homepage', () => {
    AdminPage.verifyLoginPage().should('have.text','Login');
});

When('I enter Username and Password', () => {
    AdminPage.inputUsername().type('Admin');
    AdminPage.inputPassword().type('admin123');
});


Then('I click the button Login', () => {
    cy.intercept('GET', '**/action-summary').as('action');
    AdminPage.buttonSubmit().click();
    cy.wait('@action');
});

Then('I verify login success', () => {
    AdminPage.dashboardPage().should('have.text', 'Dashboard')
});

When('Navigate to Admin',()=> {
    cy.intercept('GET','**/users*').as('Admin User');
    AdminPage.getlinkAdmin().contains('Admin').click();
    cy.wait('@Admin User');
    cy.wait(3000);
});

When('I click button add and I fill out the user page',()=>{
    //Click button Add User
    AdminPage.buttonAddUser().click();
    //Memilih User Role
    AdminPage.selectUserRole().contains('-- Select --').click();
    AdminPage.addUserRole().contains('Admin').click();
    //Memilih Employe Names
    cy.intercept('GET','**/employees*').as('EmployeNames');
    AdminPage.addEmployeName().type('a');
    AdminPage.chooseEmployename().eq(1).click();
    cy.wait('@EmployeNames');
    //Memilih Status
    AdminPage.selectStatusUser().contains('-- Select --').click();
    AdminPage.chooseStatusUser().contains('Enabled').click();
    //Input Username
    cy.intercept('GET','**/user-name*').as('User-name');
    AdminPage.inputUsernameUser().eq(1).type('Yuga13');
    cy.wait('@User-name');
    //Mengisi Password dan Confrim Password
    cy.intercept('POST','**/validation/password').as('ValidasiPassword');
    AdminPage.inputPasswordUser().eq(0).type('yuga123456');
    AdminPage.inputConfirmPasswordUser().eq(1).type('yuga123456');
    cy.wait('@ValidasiPassword');
});

Then('I click on save button and verify user',()=>{
    //Save User
    cy.intercept('POST','**/admin/users').as('UserSucces');
    AdminPage.buttonSubmit().click();
    cy.wait('@UserSucces');
    AdminPage.userPage().should('have.text', 'System Users')
});
//EDIT 

When('I update the user Page',()=>{
    //Memilih Edit User Role
    AdminPage.selectEditRole().eq(0).click();
    AdminPage.addEditUserRole().contains('ESS').click();
    //Memilih Employe Name
    cy.intercept('GET','**/employees*').as('EmployeNames');
    cy.wait(700);
    AdminPage.addEmployeName().clear();
    AdminPage.addEmployeName().type('a');
    AdminPage.chooseEmployename().eq(1).click();
    cy.wait('@EmployeNames');
    //Memilih Status Role
    AdminPage.selectStatusRole().eq(1).click();
    AdminPage.addStaturRole().contains('Enabled').click();

    AdminPage.buttoncheckbox().click();

    //Mengisi Password dan Confrim Password
    cy.intercept('POST','**/validation/password').as('ValidasiPassword');
    AdminPage.inputPasswordUser().eq(0).type('yuga12345');
    AdminPage.inputConfirmPasswordUser().eq(1).type('yuga12345');
    cy.wait('@ValidasiPassword');
    cy.wait(2000);
});

When('I choose edit button di data table', () => {
    AdminPage.chooseRecordFound().contains('Yuga13').parents('.oxd-table-row').find('.oxd-icon.bi-pencil-fill:visible').click();
});
//Delete
When('I choose delete button di data table',()=>{
    AdminPage.chooseRecordFound().contains('Yuga13').parents('.oxd-table-row').find('.oxd-icon.bi-trash:visible').click();
});

When('I choose Yes Delete',()=>{
    // AdminPage.deletePage().should('have.text', 'Are you Sure?');
    AdminPage.buttonYesDelete().contains(' Yes, Delete ').click();
    // AdminPage.userPage().should('have.text', 'System Users');

});
Then('I verify login success',()=>{

})
//Search
When('I search user by username',()=>{
    AdminPage.getSearchUsername().eq(1).type('Yuga13');
    AdminPage.buttonSubmit().click();
    cy.wait(3000);
});

When('I search user by user role',()=>{
    AdminPage.getSearchUserRole().contains('-- Select --').click();
    AdminPage.getaddUserRole().contains('Admin').click();
    cy.wait(3000);
});
When('I search user by employe name',()=>{
    cy.intercept('GET','**/employees*').as('EmployeNames');
    AdminPage.getSearchEmployeName().type('a');
    AdminPage.getEmployename().eq(1).click();
    cy.wait('@EmployeNames');
    cy.wait(3000);
});
When('I search user by status role',()=>{
    AdminPage.getsearchStatusUser().eq(1).contains('-- Select --').click();
    AdminPage.getaddStatusUser().contains('Enabled').click();
    cy.wait(3000);
});

Then('I reset the search',()=>{
    AdminPage.buttonReset().contains('Reset').click();
});