/// <reference types="cypress" />

context('ProcurarProduto', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })

    
    it('CT 01 - Produto encontrado com sucesso', () => {
      
      cy.get('#search_query_top').type('printed dress')     // Digita o nome do produto buscado.
      cy.get('#searchbox > .btn').click()                     // Executa o click para busca.

      cy.get('heading-counter').contains('results have been found')       // Checka se há resultados encontrados.
    })

    it('CT 02 - Produto não encontrado', () => {
      
      cy.get('#search_query_top').type('celular maluco') // Digita o nome do produto procurado.
      cy.get('#searchbox > .btn').click()

      cy.get('heading-counter').contains('0 results')
    })
})
