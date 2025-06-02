/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API List Users',() => {
        cy.request('GET','https://reqres.in/api/users?page=2')
        .then((Response) =>{
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        });
    });
});