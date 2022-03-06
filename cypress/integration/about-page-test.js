describe('About Page', () => {
    beforeEach( () => {
         cy.visit('http://localhost:3000/about')
    })
    it('Should have nav bar', () => {
        cy.get('header').should('exist')
        cy.get('nav').should('be.visible')
        cy.get('h1')
            .should('have.text', 'Power Room')
        cy.get('[data-testid=nav-links]').should('be.visible')
        cy.get('[data-testid=nav-links]').first().click().server().route('/')

    })
    it('Should have about url when displaying page', () => {
        cy.url().should('eq', 'http://localhost:3000/about')
    })
    it('Should have a title', () => {
        cy.get('h3').contains('The Power Room Story')
            .should('be.visible')
    });
    it ('Should have some text', () => {
        cy.get('p')
        .should('be.visible')
    });
})