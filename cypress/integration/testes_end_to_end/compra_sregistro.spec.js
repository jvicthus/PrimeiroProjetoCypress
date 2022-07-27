/// <reference types="cypress" />

context('CompraAvançadasRegistro', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })

    
    it('E2E - Compra avançada completa sem registro', () => {
      
        // Adiciona produto 1.
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line >.product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_product > h2').should('be.visible')

        cy.get('.continue > span').click()

        // Adiciona produto 2.
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_product > h2').should('be.visible')

        cy.get('.continue > span').click()

        // Adiciona produto 3.
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_product > h2').should('be.visible')

        // Procede para o carrinho.
        cy.get('.button-medium > span').click()

        // Altera a quantidade dos produtos
        cy.get('#cart_quantity_up_1_1_0_0 > span').click()
        cy.get('#cart_quantity_up_3_13_0_0 > span').click()
                
        // Procede para o checkout. 
        cy.get('.cart_navigation > .button > span').click()

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

        // Mensagem personalizada ao serviço de entrega.
        cy.get('#ordermsg > .form-control').type('Por favor, se possível, entregar durante a tarde pois estou trabalhando pela manhã')

        cy.get('.cart_navigation > .button > span').click() // Confirma endereços.

        cy.get('#cgv').check()  // Concordancia com os termos de serviço.

        cy.get('.cart_navigation > .button > span') // Confirma o frete.

        // Seleciona metodo de pagamento.
        cy.get('.cheque').click()

        // Confirma o pagamento.
        cy.get('#cart_navigation > .button > span').click()

        // Confirmação do pedido.
        cy.get('.alert').should('have.text', 'Your order on My Store is complete.')
    })
})
