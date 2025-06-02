/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API Update User',() =>{
        const requestBody={
                name: 'Yuga',
                job: 'QA Engineer'
        };
        cy.request('PUT','https://reqres.in/api/users/2',requestBody)
        .then((Response) =>{
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
            expect(Response.body.name).to.eq(requestBody.name)
            expect(Response.body.job).to.eq(requestBody.job)
        });
    });
});