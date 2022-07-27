/// <reference types="cypress" />

context('CompartilharProduto', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })

    
    it('CT 01 - Compartilhar por e-mail', () => {
      
      // Seleciona o produto.
      cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line >.product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

      // Envia para o e-mail informado.
      cy.get('#send_friend_button').click()

      cy.get('#friend_name').type('Joãozinho Um Dois Três')
      cy.get('#friend_email').type('Jaumzin@mail.com')

      cy.get('#sendEmail > span').click()

      cy.get('.fancybox-inner > :nth-child(2)').should('have.text', 'Your e-mail has been sent successfully') // Verifica se o envio foi realizado.

      cy.get('.fancybox-inner > .submit > .button').click()
    })

    it('CT 02 - Compartilhar pelo twitter', () => {
      
      cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line >.product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

      cy.get('.btn-twitter').click()
    })

    it('CT 03 - Compartilhar pelo printerest', () => {
      
      cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line >.product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

      cy.get('.btn-pinterest').click()
    })

    it('CT 04 - Imprimir as informações do produto', () => {
      
      cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line >.product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

      cy.get('.print').click()
    })
})