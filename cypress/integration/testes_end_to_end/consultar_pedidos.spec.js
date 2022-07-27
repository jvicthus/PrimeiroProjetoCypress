/// <reference types="cypress" />

context('ConsultarPedidos', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })
    
    
    it('E2E - Consultar histórico e detalhes dos pedidos', () => {
      
      // Realiza login login.
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('herculano23')
      cy.get('#SubmitLogin > span').click()

      cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span').click() // Leva a página de pedidos.

      cy.get('.footable-toggle').click() // Exibe os detalhes do pedido.

      cy.get(':nth-child(2) > .footable-row-detail-value > .link-button').click()  // Baixa PDF com os detalhes.

      // Confirma se o GET para baixar o PDF foi executado com sucesso.
      cy.intercept('GET', 'http://automationpractice.com/index.php?controller=order-detail&id_order=457014&ajax=true', {statusCode: 200})

      // Enviar uma mensagem sobre o produto.

      cy.get('#sendOrderMessage > :nth-child(3) > .form-control').select('1')
      cy.get(':nth-child(4) > .form-control').type('Acabou a criatividade mensagem texto isso ai')
      cy.get('#sendOrderMessage > .submit > .button > span').click()
    })
})
