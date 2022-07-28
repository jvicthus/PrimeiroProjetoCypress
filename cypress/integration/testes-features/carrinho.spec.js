/// <reference types="cypress" />

context('Carrinho', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })
    
    
    it('CT 01 - Adicionar um produto ao carrinho', () => {
      
      // Adiciona o produto ao carrinho.
      cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line >.product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

      cy.get('.layer_cart_product > h2').should('be.visible')        // Verifica se o produto foi adicionado.
    })

    it('CT 02 - Adiciona vários produtos ao carrinho', () => {
  
        // Realiza login para registrar o carrinho.
        cy.get('.login').click()
        cy.get('#email').type('joao.jvfh@outlook.com')
        cy.get('#passwd').type('senhafonfon')
        cy.get('#SubmitLogin > span').click()
        cy.get('li > .btn > span').click()

        // Adiciona produto 1.
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line >.product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_product > h2').should('be.visible')

        cy.get('.continue > span').click()

        // Adiciona produto 2.
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_product > h2').should('be.visible')

        // Adiciona produto 3.
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_product > h2').should('be.visible')
    })

    it('CT 03 - Remover produto do carrinho', () => {
      
        cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.

        // Realiza login login.
        cy.get('#email').type('joao.jvfh@outlook.com')
        cy.get('#passwd').type('senhafonfon')
        cy.get('#SubmitLogin > span').click()

        cy.get('li > .btn > span').click()      // Volta para a página inicial.

        // Adiciona um produto ao carrinho.
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line >.product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_product > h2').should('be.visible')        // Verifica se o produto foi adicionado.
        cy.get('.continue > span').click()

        cy.get('[title="View my shopping cart"]').click()       // Abre a página do carrinho de compras.

        cy.get('.icon-trash').click()        // Remove o produto do carrinho.

        cy.get('.alert').should('be.visible')       // Confirma o alerta de remoção.
    })
})
