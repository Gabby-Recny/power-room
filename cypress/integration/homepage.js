describe('Homepage', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    })
    it('Should have a header with the page title and menu', () => {
        cy.get('nav')
            .should('exist')
        cy.get('h1')
            .should('have.text', 'Power Room')
        cy.get('[data-testid=burger-button]')
            .click()
            .get('[data-testid=menu')
                .should('be.visible')
            .get('[data-testid=dropdown-items]')
                .eq(1)
                .click()
                .server()
                .route('/about')
                .get('h3')
                    .contains('The Power Room Story')
                .get('[data-testid=dropdown-items]')
                    .first()
                    .click()
                    .server()
                    .route('/')
                    .get('h1')
                        .contains('Power Room')
    });
    it('Should have a colorful background', () => {
        cy.get('body')
            .should('exist')
            .should('have.css', 'background-image')
    })
  });