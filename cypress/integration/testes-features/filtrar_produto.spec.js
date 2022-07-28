/// <reference types="cypress" />

context('FiltrarProduto', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })

    
    it.skip('CT 01 - Filtrar por categoria', () => {

      // Seleciona a categoria.
      cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
      cy.get(':nth-child(1) > .subcategory-image > .img > .replace-2x').click()

      cy.get('.cat-name').should('contains.text', 'Casual Dresses')       // Verifica a categoria.
    })

    it.skip('CT 02 - Ordenar produto', () => {
      
      // Seleciona a categoria. 
      cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()

      cy.get('#selectProductSort').select('price:asc').should('have.value', 'price:asc')
    })

    it('CT 03 - Filtrar por tamanho e cor', () => {
      
      // Seleciona a categoria. 
      cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
      
      cy.get('#layered_id_attribute_group_2').not('[disabled]').check().should('be.checked')
      cy.get('#layered_id_attribute_group_13').click()
    })

    it.skip('CT 04 - Filtrar por intervalo de preço', () => {
      
        // Seleciona a categoria.
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    
        cy.get('.ui-slider-range').as('range').invoke('val', 25).trigger('change')
      })
})
