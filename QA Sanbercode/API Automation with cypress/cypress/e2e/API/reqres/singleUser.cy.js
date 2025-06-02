/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API Single User',() =>{
        cy.request('GET','https://reqres.in/api/users/2')
        .then((Response) =>{
            expect(Response.status).to.eq(200)
            expect(Response.body).to.have.property('data')
            expect(Response.body).to.have.property('support')
        });
    });
});