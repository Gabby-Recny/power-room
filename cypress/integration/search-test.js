describe('Search Bar', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
        // cy.intercept('GET', 'REFUGE RESTROOMS API', {
        //     fixture: 'LArestrooms.json' })
        // cy.visit('http://localhost:3000')
    })
    it('Should have a search bar that only takes in numbers', () => {
        cy.get('[data-testid=search-bar]')
            .should('exist')
        cy.get('label')
            .should('have.text', 'Find a Safe Restroom Near You')
        cy.get('[data-testid=search-input]')
            .should('have.attr', 'placeholder', 'Enter zip code')
            .type('11510')
            .should('have.value', '11510')
        cy.get('[data-testid=search-button]')
            .contains('Search')
    })
});