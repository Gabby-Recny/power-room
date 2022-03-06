describe('About Page', () => {
    beforeEach( () => {
         cy.visit('http://localhost:3000/about')
    })
    it('Should havea a title', () => {
        cy.get('h3').contains('The Power Room Story')
            .should('be.visible')
    });
    it ('Should have some text', () => {
        cy.get('p')
        .should('be.visible')
    });
})