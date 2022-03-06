describe('Homepage', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    })
    it('Should have a header with the page title and nav bar', () => {
        cy.get('header').should('exist')
        cy.get('nav').should('be.visible')
        cy.get('h1')
            .should('have.text', 'Power Room')
        cy.get('[data-testid=nav-links]').should('be.visible')
        cy.get('[data-testid=nav-links]').first().click().server().route('/')
        cy.get('[data-testid=nav-links]').eq(1).click().server().route('/about')
            .get('h3').contains('The Power Room Story')
    });
    it('Should have a colorful background', () => {
        cy.get('body')
            .should('exist')
            .should('have.css', 'background-image')
    })
  });