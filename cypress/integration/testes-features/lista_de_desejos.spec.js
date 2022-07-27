/// <reference types="cypress" />

context('ListadeDesejos', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false}) // Define a página web a ser utilizada em cada teste.
    })

    
    it('CT 01 - Usuário não logado', () => {
      
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click('center')

        cy.get('#wishlist_button').click()

        cy.get('.fancybox-error').should('have.text', 'You must be logged in to manage your wishlist')
    })

    it('CT 02 - Criar lista de desejos', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.

      // Realiza login login.
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('herculano23')
      cy.get('#SubmitLogin > span')

      cy.get('.lnk_wishlist > a > span').click('center')    // Entra nas listas de desejos da conta.

      // Cria nova lista de desejos.
      cy.get('#name').type('Coleção inverno')
      cy.get('#submitWishlist > span').click()
    })

    it('CT 03 - Adicionar produto sem alterações', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.

      // Realiza login login.
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('herculano23')
      cy.get('#SubmitLogin > span')

      cy.get('li > .btn > span').click()    // Volta para a página inicial.

      // Seleciona o produto.
      cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click('center')

      cy.get('#wishlist_button').click()    // Coloca na lista de desejos.

      cy.get('.fancybox-error').should('have.text', 'Added to your wishlist')     // Confirma.

      cy.get('.fancybox-item').click()
    })

    it('CT 04 - Adicionar produto com alterações', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.

      // Realiza login login.
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('herculano23')
      cy.get('#SubmitLogin > span')

      cy.get('li > .btn > span').click()    // Volta para a página inicial.

      // Seleciona o produto.
      cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click('center')

      // Altera atributos do produto
      cy.get('.icon-plus').click()
      cy.get('#group_1').select('L')
      cy.get('#color_14').click()

      cy.get('#wishlist_button').click()    // Coloca na lista de desejos.

      cy.get('.fancybox-error').should('have.text', 'Added to your wishlist')     // Confirma.

      cy.get('.fancybox-item').click()
    })

    it('CT 05 - Compartilhar a lista de desejos', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.

      // Realiza login login.
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('herculano23')
      cy.get('#SubmitLogin > span')

      cy.get('.lnk_wishlist > a > span').click('center')    // Entra nas listas de desejos da conta.

      cy.get('#wishlist_50513 > [style="width:200px;"] > a').click()    // Seleciona lista de desejos.

      cy.get('#showSendWishlist > span').dbclick()    // Abre a função de compartilhamento.

      // Digita e-mails.
      cy.get('#email1').text('amigoimaginario1@email.com')
      cy.get('#email2').text('amigoimaginario2@email.com')
      cy.get('#email2').text('amigoimaginario3@email.com')

      cy.get('.wl_send > fieldset > .submit > .btn > span').click()   // Enviar os e-mails.

      // Confirma se o post foi executado com sucesso.
      cy.intercept('POST', 'http://automationpractice.com/modules/blockwishlist/sendwishlist.php', {statusCode: 200})
    })

    it('CT 06 - Alterar produto da lista de desejos', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.

      // Realiza login login.
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('herculano23')
      cy.get('#SubmitLogin > span')

      cy.get('.lnk_wishlist > a > span').click('center')    // Entra nas listas de desejos da conta.

      cy.get('#wishlist_50513 > [style="width:200px;"] > a').click()    // Seleciona lista de desejos.

      // Altera as informações.
      cy.get('#quantity_1_1').type('3')
      cy.get('#priority_1_1').select('High')

      cy.get('.btn_action > .btn > span')   // Salva as informações.

    })

    it('CT 07 - Deletar produto da lista de desejos', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.

      // Realiza login login.
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('herculano23')
      cy.get('#SubmitLogin > span')

      cy.get('.lnk_wishlist > a > span').click('center')    // Entra nas listas de desejos da conta.

      cy.get('#wishlist_50513 > [style="width:200px;"] > a').click()    // Seleciona lista de desejos.

      cy.get('.icon-remove-sign').click()   // Deleta o produto.

    })

    it('CT 08 - Deletar lista de desejos', () => {
      
      cy.get('a.login').click() // Realiza click que direciona para a página de cadastro/login.

      // Realiza login login.
      cy.get('#email').type('joao.jvfh@outlook.com')
      cy.get('#passwd').type('herculano23')
      cy.get('#SubmitLogin > span')

      cy.get('.lnk_wishlist > a > span').click('center')    // Entra na lista de desejos.

      cy.get('.icon-remove').click()    // Remove a lista de desejos

      // Confirma se o post foi executado com sucesso.
      cy.intercept('POST', 'http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist&rand=1658947885828&deleted=1&id_wishlist=50514&_=1658947179188',
      {statusCode: 200})
      
    })
})