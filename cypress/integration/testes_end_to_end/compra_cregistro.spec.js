/// <reference types="cypress" />

context('CompraSimplescRegistro', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })

    
    it('E2E - Compra simples completa com registro', () => {
      
        // Seleciona o produto.
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line >.product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

        cy.get('.button-medium > span').click() // Procede para o checkout.
        cy.get('.cart_navigation > .button > span').click()

        // Realiza login.
        cy.get('#email').type('joao.jvfh@outlook.com')
        cy.get('#passwd').type('senhafonfon')
        cy.get('#SubmitLogin > span').click()

        // Mensagem personalizada ao serviço de entrega.
        cy.get('#ordermsg > .form-control').type('Por favor, se possível, entregar durante a tarde pois estou trabalhando pela manhã')

        cy.get('.cart_navigation > .button > span').click() // Confirma endereços.

        cy.get('#cgv').check()  // Concordancia com os termos de serviço.

        cy.get('.cart_navigation > .button > span').click() // Confirma o frete.

        // Seleciona metodo de pagamento.
        cy.get('.bankwire').click()

        // Confirma o pagamento.
        cy.get('#cart_navigation > .button > span').click()

        // Confirmação do pedido.
        cy.get('.cheque-indent > .dark').should('have.text', 'Your order on My Store is complete.')
    })
})
