/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API Register User Succes',() =>{
        const requestBody={
                email: 'eve.holt@reqres.in',
                password: 'pistol'
        };
        cy.request('POST','https://reqres.in/api/register',requestBody)
        .then((Response) =>{
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
            expect(Response.body).to.have.property('id')
            expect(Response.body).to.have.property('token')
        });
    });
});