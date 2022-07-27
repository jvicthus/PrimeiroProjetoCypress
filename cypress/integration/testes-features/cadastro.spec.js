/// <reference types="cypress" />

context('Cadastro', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php') // Define a página web a ser utilizada em cada teste.
    })
  
    it('CT 01 - O cadastro é realizado com sucesso (WIP)', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.
  
      // Realiza cadastro.
      cy.get('#email_create').type('fonfonteste6@email.com').should('have.value', 'fonfonteste6@email.com')
      cy.get('#SubmitCreate > span').click()
      
      cy.get('#id_gender2').check() 
      cy.get('#customer_firstname').type('Nome do Fonfon').should('have.value', 'Nome do Fonfon')
      cy.get('#customer_lastname').type('Segundo Nome do Fonfon').should('have.value', 'Segundo Nome do Fonfon')
      cy.get('#passwd').type('senhafonfon').should('have.value', 'senhafonfon')
      cy.get('#days').select('30').should('have.value', '30')
      cy.get('#months').select('January').should('have.value', '1')
      cy.get('#years').select('1999').should('have.value', '1999')
      cy.get('#newsletter').not('[disabled]').check().should('be.checked')
      cy.get('#optin').not('[disabled]').check().should('be.checked')
      cy.get('#company').type('UEPB').should('have.value', 'UEPB')
      cy.get('#address1').type('Rua Alfredo Lustosa Cabral, SN').should('have.value', 'Rua Alfredo Lustosa Cabral, SN')
      cy.get('#address2').type('Salgadinho').should('have.value', 'Salgadinho')
      cy.get('#city').type('Patos-PB').should('have.value', 'Patos-PB')
      cy.get('#id_state').select('Montana').should('have.value', '26')
      cy.get('#postcode').type('58840000').should('have.value', '58840000')
      cy.get('#id_country').select('United States').should('have.value', '21')
      cy.get('#other').type('Informações adicionais do endereço de fonfon').should('have.value', 'Informações adicionais do endereço de fonfon')
      cy.get('#phone').type('83 3421-1477').should('have.value', '83 3421-1477')
      cy.get('#phone_mobile').type('83 99900-1477').should('have.value', '83 99900-1477')
      cy.get('#alias').type('Av. Cel. Pedro Targino, SN - Centro, Araruna - PB, 58233-000').should('have.value', 'My addressAv. Cel. Pedro Targino, SN - Centro, Araruna - PB, 58233-000')
      
      cy.get('#submitAccount > span').click() 
    })

    it('CT 02 - Informações fornecidas no cadastro incorretamente (WIP)', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.
  
      // Preenchendo os dados:
      cy.get('#email_create').type('fake@email.com').should('have.value', 'fake@email.com')
      cy.get('#SubmitCreate > span').click() 
        
      
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

    it.skip('CT 04 - O e-mail fornecido já foi utilizado por outro usuário', () => {
      
        cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.
    
        // Preenchendo o campo de e-mail com um já utilizado:
        cy.get('#email_create').type('fake@email.com').should('have.value', 'fake@email.com')
        
  
        cy.get('#SubmitCreate > span').click() 
    })
})
