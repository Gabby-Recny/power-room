
describe('Search Bar', () => {
    beforeEach( () => {
        // cy.intercept('GET', 'https://api.zippopotam.us/us/90210', { fixture: '90210' })
        // cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=34.1030&lng=-118.4105', { fixture: 'LArestrooms' })
         cy.visit('http://localhost:3000/')
    })
    it('Should have a search bar that only takes in numbers', () => {
        cy.get('[data-testid=search-bar]')
            .should('exist')
        cy.get('label')
            .should('have.text', 'Find a Safe Restroom Near You')
        cy.get('[data-testid=search-input]')
            .should('have.attr', 'placeholder', 'Enter zip code')
        cy.get('[data-testid=search-button]')
            .contains('Search')
    })
    it('Should show error message and clear form if an incorrect zip code entered', () => {
        cy.get('[data-testid=search-input]')
            .type('21834092843')
            .should('have.value', '21834092843')
        cy.get('[data-testid=search-button]')
            .click()
        cy.get('[data-testid=error-message]')
            .should('have.text', `Please enter a United States five digit postal code.`)        
        cy.get('[data-testid=result-card]')
            .should('have.length', 0)
    })
    it('Should show input zip code when search button is clicked', () => {
        cy.get('[data-testid=search-input]')
            .type('90210')
            .should('have.value', '90210')
        cy.get('[data-testid=search-button]')
            .contains('Search')
            .click()
            .intercept('GET', 'https://api.zippopotam.us/us/90210', { fixture: '90210.json' })
        
    })
    it('Should should show bathroom results when button is clicked', () => {
        cy.get('[data-testid=search-input]')
        .type('90210')
        .should('have.value', '90210')
        cy.get('[data-testid=search-button]')
            .contains('Search')
            // .intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=30&offset=0&lat=34.1030&lng=-118.4105/', { fixture: 'LArestrooms.json' })
            .click()
        cy.get('[data-testid=result-card]')
            .should('have.length', 30)
    })


});