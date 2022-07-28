/// <reference types="cypress" />

context('EnviarMensagem', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })
    
    
    it('E2E - Enviar mensagem de atraso de entrega', () => {
      
      // Realiza login login.
      cy.get('.login').click()
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('senhafonfon')
      cy.get('#SubmitLogin > span').click()

      cy.get('li > .btn > span').click()      // Volta para a página inicial.

      cy.get('#contact-link > a').click()     // Entra na página de mensagem.

      // Preenche informações
      cy.get('#id_contact').select('Customer service')
      cy.get(':nth-child(6) > .selector > .form-control').select('457014')
      cy.get('#message').type('Por favor, gostaria de informações sobre o meu pedido em atraso. Obrigado')

      cy.get('#submitMessage > span').click() // Enviar a mensagem.

      cy.get('.alert').should('be.visible') // Confirma o envio.
    })
})
