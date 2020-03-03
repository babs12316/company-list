describe('Testing entire app', function() {
    it('Visits CompanyList page', function() {
      cy.visit('http://localhost:3000/')
      cy.contains('Martian').click({force: true,multiple: true})
      cy.url().should('include', 'http://localhost:3000/1')
      })
    it('Visits Company detail page', function() {
        cy.get('input').should('have.value', '10000')
        cy.get('Button').click({force: true,multiple: true})
        cy.url().should('include', 'http://localhost:3000/')
        
      })
  })

 