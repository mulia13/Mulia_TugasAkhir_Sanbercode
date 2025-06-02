/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API Register User Unsucces',() =>{
        const requestBody={
                email: 'sydney@fife',
        };
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: requestBody,
            failOnStatusCode: false 
        })
        .then((Response) =>{
            expect(Response.status).to.eq(400)
            expect(Response.body).to.not.be.null
            expect(Response.body).to.have.property('error', 'Missing password')
        });
    });
});