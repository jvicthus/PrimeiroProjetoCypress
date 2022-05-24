/// <reference types="cypress" />

context('Cadastro', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php') // Define a página web a ser utilizada em cada teste.
    })
  
    // WIP
    it.skip('CT 01 - O cadastro é realizado com sucesso (WIP)', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.
  
      // Preenchendo os dados:
      cy.get('#email_create').type('fake@email.com').should('have.value', 'fake@email.com')
      

      cy.get('#SubmitCreate > span').click() 
    })

    it('CT 02 - O e-mail fornecido não é válido', () => {
      
        cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.
    
        // Preenchendo o campo de e-mail não válido:
        cy.get('#email_create').type('fakemailpontocom').should('have.value', 'fakemailpontocom')
        
  
        cy.get('#SubmitCreate > span').click() 
    })

    it('CT 03 - O e-mail fornecido já foi utilizado por outro usuário', () => {
      
        cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.
    
        // Preenchendo o campo de e-mail com um já utilizado:
        cy.get('#email_create').type('fake@email.com').should('have.value', 'fake@email.com')
        
  
        cy.get('#SubmitCreate > span').click() 
    })
})
