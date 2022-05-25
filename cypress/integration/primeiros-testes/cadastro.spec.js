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
        
      // Código novo:
      cy.get('.action-radios [type="radio"]').not('[disabled]').check().should('be.checked')
      cy.get('#name_first').type('Nome do Fonfon1').should('have.value', 'Nome do Fonfon1')
      cy.get('#name_last').type('Segundo Nome do Fonfon1').should('have.value', 'Segundo Nome do Fonfon1')
      cy.get('#senha').type('senhafonfon1').should('have.value', 'senhafonfon1')
      cy.get('.action-selectdia').select('apples')
      cy.get('.action-selectdia').should('have.value', 'fr-apples')
      cy.get('.action-selectmes').select('apples')
      cy.get('.action-selectmes').should('have.value', 'fr-apples')
      cy.get('.action-selectano').select('apples')
      cy.get('.action-selectano').should('have.value', 'fr-apples')
      cy.get('.action-check [type="checkbox"]').not('[disabled]').check().should('be.checked')
      cy.get('.action-check [type="checkbox"]').not('[disabled]').check().should('be.checked')
      cy.get('company').type('UEPB').should('have.value', 'UEPB')
      cy.get('adress').type('R. Alfredo Lustosa Cabral, s/n - Salgadinho').should('have.value', 'R. Alfredo Lustosa Cabral, s/n - Salgadinho')
      cy.get('company').type('UEPB').should('have.value', 'UEPB')
      cy.get('company').type('UEPB').should('have.value', 'UEPB')
      cy.get('.action-selectstate').select('apples')
      cy.get('.action-selectstate').should('have.value', 'fr-apples')
      cy.get('company').type('UEPB').should('have.value', 'UEPB')
      cy.get('.action-selectcountry').select('United States')
      cy.get('.action-selectcountry').should('have.value', 'fr-United States')
      cy.get('#textarea').type('Informações adicionais do endereço de fonfon2').should('have.value', 'Informações adicionais do endereço de fonfon2')
      cy.get('homephone').type('83 3421-1477').should('have.value', '83 3421-1477')
      cy.get('mobilephone').type('83 99900-1477').should('have.value', '83 99900-1477')
      cy.get('alias-adress').type('Av. Cel. Pedro Targino, s/n - Centro, Araruna - PB, 58233-000').should('have.value', 'Av. Cel. Pedro Targino, s/n - Centro, Araruna - PB, 58233-000')
        
    })

    it.skip('CT 02 - Informações fornecidas no cadastro incorretamente (WIP)', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.
  
      // Preenchendo os dados:
      cy.get('#email_create').type('fake@email.com').should('have.value', 'fake@email.com')

      cy.get('#SubmitCreate > span').click() 
        
      // Código novo:
      cy.get('.action-radios [type="radio"]').not('[disabled]').check().should('be.checked')
      cy.get('#name_first').type('Nome do Fonfonum').should('have.value', 'Nome do Fonfon1')
      cy.get('#name_last').type('Segundo Nome do Fonfon1').should('have.value', 'Segundo Nome do Fonfon1')
      cy.get('#senha').type('senhafonfon1').should('have.value', 'senhafonfon1')
      cy.get('.action-selectdia').select('apples')
      cy.get('.action-selectdia').should('have.value', 'fr-apples')
      cy.get('.action-selectmes').select('apples')
      cy.get('.action-selectmes').should('have.value', 'fr-apples')
      cy.get('.action-selectano').select('apples')
      cy.get('.action-selectano').should('have.value', 'fr-apples')
      cy.get('.action-check [type="checkbox"]').not('[disabled]').check().should('be.checked')
      cy.get('.action-check [type="checkbox"]').not('[disabled]').check().should('be.checked')
      cy.get('company').type('UEPB').should('have.value', 'UEPB')
      //cy.get('adress').type('R. Alfredo Lustosa Cabral, s/n - Salgadinho').should('have.value', 'R. Alfredo Lustosa Cabral, s/n - Salgadinho')
      cy.get('company').type('UEPB').should('have.value', 'UEPB')
      cy.get('company').type('UEPB').should('have.value', 'UEPB')
      cy.get('.action-selectstate').select('apples')
      cy.get('.action-selectstate').should('have.value', 'fr-apples')
      cy.get('company').type('UEPB').should('have.value', 'UEPB')
      cy.get('.action-selectcountry').select('United States')
      cy.get('.action-selectcountry').should('have.value', 'fr-United States')
      cy.get('#textarea').type('Informações adicionais do endereço de fonfon2').should('have.value', 'Informações adicionais do endereço de fonfon2')
      cy.get('homephone').type('83 3421-1477').should('have.value', '83 3421-1477')
      cy.get('mobilephone').type('83 99900-1477').should('have.value', '83 99900-1477')
      cy.get('alias-adress').type('Av. Cel. Pedro Targino, s/n - Centro, Araruna - PB, 58233-000').should('have.value', 'Av. Cel. Pedro Targino, s/n - Centro, Araruna - PB, 58233-000')
        
    })
    
    it('CT 03 - O e-mail fornecido não é válido', () => {
      
        cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.
    
        // Preenchendo o campo de e-mail não válido:
        cy.get('#email_create').type('fakemailpontocom').should('have.value', 'fakemailpontocom')
        
  
        cy.get('#SubmitCreate > span').click() 
    })

    it('CT 04 - O e-mail fornecido já foi utilizado por outro usuário', () => {
      
        cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.
    
        // Preenchendo o campo de e-mail com um já utilizado:
        cy.get('#email_create').type('fake@email.com').should('have.value', 'fake@email.com')
        
  
        cy.get('#SubmitCreate > span').click() 
    })
})
