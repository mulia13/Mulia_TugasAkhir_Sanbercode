export default class AdminPage{
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
    static getlinkAdmin(){
        return cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]');
    }
    static userPage(){
        return cy.get('[class="oxd-text oxd-text--h5 oxd-table-filter-title"]');
    }
    static buttonAddUser(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]');
    }
    static selectUserRole(){
        return cy.get('[class="oxd-select-text-input"]');
    }
    static addUserRole(){
        return cy.get('[class="oxd-select-option"]');
    }
    static addEmployeName(){
        return cy.get('[placeholder="Type for hints..."]');
    }
    static chooseEmployename(){
        return cy.get('[class="oxd-autocomplete-option"]');
    }
    static selectStatusUser(){
        return cy.get('[class="oxd-select-text-input"]');
    }
    static chooseStatusUser(){
        return cy.get('[class="oxd-select-option"]');
    }
    static inputUsernameUser(){
        return cy.get('[class="oxd-input oxd-input--active"]');
    }
    static inputPasswordUser(){
        return cy.get('[type="password"]');
    }
    static inputConfirmPasswordUser(){
        return cy.get('[type="password"]');
    }
    //Edit User
    static chooseRecordFound(){
        return cy.get('[class="oxd-table-row oxd-table-row--with-border"]');
    }
    static chooseBorderIcon(){
        return cy.get('[class="oxd-table-cell oxd-padding-cell"]');
    }

    static buttonEditUser(){
        return cy.get('[class="oxd-icon bi-pencil-fill"]');
    }
    static selectEditRole(){
        return cy.get('[class="oxd-select-text--after"]');
    }
    static addEditUserRole(){
        return cy.get('[class="oxd-select-option"]');
        // return cy.get('[class="oxd-select-option --selected"]');
    }
    static selectStatusRole(){
        return cy.get('[class="oxd-select-text--after"]');
    }
    static addStaturRole(){
        return cy.get('[class="oxd-select-option --selected"]');
    }
    static buttonEditUser(userName) {
        return cy.contains(userName) // Mencari elemen yang berisi username
            .parents('div') // Mendapatkan elemen induk (baris tabel)
            .find('i.oxd-icon.bi-pencil-fill'); // Mencari tombol edit di dalam baris tersebut
    }
    static buttoncheckbox(){
        return cy.get('[class="oxd-icon bi-check oxd-checkbox-input-icon"]');
        // return cy.get('[type="checkbox"]').check({ force: true });
    }
    //Delete
    static buttonYesDelete(){
        return cy.get('[type="button"]');
    }
    static deletePage(){
        return cy.get('[class="oxd-text oxd-text--p oxd-text--card-title"]');
    }
    //Search Edit
    static getSearchUsername(){
        return cy.get('[class="oxd-input oxd-input--active"]');
    }
    static getSearchUserRole(){
        return cy.get('[class="oxd-select-text-input"]');
    }
    static getaddUserRole(){
        return cy.get('[class="oxd-select-option"]');
    }
    static getSearchEmployeName(){
        return cy.get('[placeholder="Type for hints..."]');
    }
    static getEmployename(){
        return cy.get('[class="oxd-autocomplete-option"]');
    }

    static getsearchStatusUser(){
        return cy.get('[class="oxd-select-text-input"]');
    }
    static getaddStatusUser(){
        return cy.get('[class="oxd-select-option"]');
    }
    static buttonReset(){
        return cy.get('[type="button"]');
    }
}