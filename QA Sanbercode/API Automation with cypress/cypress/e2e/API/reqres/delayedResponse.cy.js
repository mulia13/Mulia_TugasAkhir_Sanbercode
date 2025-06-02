/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API Delayed Response',() =>{
        cy.request('GET','https://reqres.in/api/users?delay=3')
        .then((Response) =>{
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        });
    });
});