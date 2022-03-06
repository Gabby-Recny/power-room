describe('Error page', () => {

    it('Should handle 404 Errors on Main Page', () => {
        cy.intercept('GET', 'http://localhost:3000', { statusCode: 404 })

        cy.visit('http://localhost:3000/error')

        cy.get('[data-testid=error-container]')
            .should('exist')
            .should('have.class', 'error-container')
        .get('span')
            .eq(0)
            .should('have.text', '4')
            .should('have.css', 'transform')
        .get('[data-testid=link-container]')
            .contains('HOME')
            .click()
            .server()
            .route('/')
            .get('h1')
                .contains('Power Room')
    })
    it('Should handle 404 Errors on a bad response', () => {
        cy.intercept('GET', 'http://localhost:3000/', { ok: false })

        cy.visit('http://localhost:3000/error')

        cy.get('[data-testid=error-container]')
            .should('exist')
            .should('have.class', 'error-container')
        .get('span')
            .eq(0)
            .should('have.text', '4')
            .should('have.css', 'transform')
        .get('[data-testid=link-container]')
            .contains('HOME')
            .click()
            .server()
            .route('/')
            .get('h1')
                .contains('Power Room')
    })
})