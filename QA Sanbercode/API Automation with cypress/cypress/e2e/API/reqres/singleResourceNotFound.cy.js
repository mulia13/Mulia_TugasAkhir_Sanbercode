/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API Single User Not Found',() =>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode: false
        })
        .then((Response) =>{
            expect(Response.status).to.eq(404)
        });
    });
});