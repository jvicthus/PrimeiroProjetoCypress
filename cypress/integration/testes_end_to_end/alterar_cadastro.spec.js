/// <reference types="cypress" />

context('AlterarCadastro', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })
    
    
    it('E2E - Alterar informações de cadastro', () => {
      
      // Realiza login login.
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('herculano23')
      cy.get('#SubmitLogin > span').click()

      cy.get('.myaccount-link-list > :nth-child(4) > a > span').click() // Entra na página de informações do cadastro.

      cy.get('#customer_firstname').type(' Victhus') // Muda primeiro nome.

      // Muda senha.
      cy.get('#old_passwd').type('herculano23')
      cy.get('#passwd').type('senhafonfon')
      cy.get('#confirmation').type('senhafonfon')

      cy.get(':nth-child(11) > .btn > span').click() // Salva as novas informações.

      cy.get('.alert').should('have.text', 'Your personal information has successfully updated')

      cy.get('.footer_links > :nth-child(1) > .btn > span').click()

      // Adicionar novo endereço.

      cy.get('.myaccount-link-list > :nth-child(3) > a > span').click() // Entra na página de endereços.

      cy.get('.main-page-indent > .btn > span').click()

      // Preenche novo endereço
      cy.get('#address1').type('Rua de São Sebastião, 58').should('have.value', 'Rua de São Sebastião, 58')
      cy.get('#address2').type('Forrozinho').should('have.value', 'Forrozinho')
      cy.get('#city').type('Patos-PB').should('have.value', 'Patos-PB')
      cy.get('#id_state').select('Missouri').should('have.value', '25')
      cy.get('#postcode').type('58840').should('have.value', '58840')
      cy.get('#id_country').select('United States').should('have.value', '21')
      cy.get('#other').type('Informações adicionais do endereço de fonfon').should('have.value', 'Informações adicionais do endereço de fonfon')
      cy.get('#phone').type('83 3421-1477').should('have.value', '83 3421-1477')
      cy.get('#phone_mobile').type('83 99900-1477').should('have.value', '83 99900-1477')
      cy.get('#alias').type('Endereço Alternativo').should('have.value', 'My addressEndereço Alternativo')

      cy.get('#submitAddress > span').click()
    })
})
