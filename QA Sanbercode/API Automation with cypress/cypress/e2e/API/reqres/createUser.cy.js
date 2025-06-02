/// <reference types="cypress" />


describe('Reqres API TESTING', () => {

    it('Test API Create User',() =>{
        const requestBody={
                name: 'Yuga',
                job: 'QA Manual'
        };
        cy.request('POST','https://reqres.in/api/users',requestBody)
        .then((Response) =>{
            expect(Response.status).to.eq(201)
            expect(Response.body).to.not.be.null
            expect(Response.body.name).to.eq(requestBody.name)
            expect(Response.body.job).to.eq(requestBody.job)
        });
    });
});