/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API Delete User',() =>{
        cy.request('DELETE','https://reqres.in/api/users/2')
        .then((Response) =>{
            expect(Response.status).to.eq(204)
        });
    });
});