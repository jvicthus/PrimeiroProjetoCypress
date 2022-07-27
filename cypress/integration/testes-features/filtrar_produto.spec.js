/// <reference types="cypress" />

context('FiltrarProduto', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })

    
    it('CT 01 - Filtrar por categoria', () => {

      // Seleciona a categoria.
      cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').trigger('mouseover')
      cy.get('[title="Casual Dresses"]').click()

      cy.get('.cat-name').contains('casual dresses').should('be.visible')       // Verifica a categoria.
    })

    it('CT 02 - Ordenar produto', () => {
      
      cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').trigger('mouseover')
      cy.get('[title="Casual Dresses"]').click()

      cy.get('#selectProductSort').select('price: lowest first').should('have.value', 'price: lowest first')
    })

    it('CT 03 - Filtrar por tamanho e cor', () => {
      
      cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').trigger('mouseover')
      cy.get('[title="Casual Dresses"]').click()
  
      cy.get('#layered_id_attribute_group_2').not('[disabled]').check().should('be.checked')
      cy.get('#layered_id_attribute_group_13').click()
    })

    it('CT 04 - Filtrar por intervalo de preço', () => {
      
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').trigger('mouseover')
        cy.get('[title="Casual Dresses"]').click()
    
        cy.get('.ui-slider-range').as('range').invoke('val', 50).trigger('change')
      })
})
