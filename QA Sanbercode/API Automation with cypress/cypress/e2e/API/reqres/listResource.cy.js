/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API List Resource',() =>{
        cy.request('GET','https://reqres.in/api/unknown')
        .then((Response) =>{
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        });
    });
});