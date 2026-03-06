class CheckoutPage {

  preencherDadosFaturamento(dados) {
    cy.get('#billing_first_name').clear().type(dados.nome);
    cy.get('#billing_last_name').clear().type(dados.sobrenome);
    if (dados.empresa) { cy.get('#billing_company').clear().type(dados.empresa); }
    cy.get('#billing_address_1').clear().type(dados.endereco);
    cy.get('#billing_city').clear().type(dados.cidade);
    cy.get('#billing_postcode').clear().type(dados.cep);
    cy.get('#billing_phone').clear().type(dados.telefone);
    cy.get('#billing_email').clear().type(dados.email);
  }

  finalizarPedido() {
    cy.get('#terms').check({ force: true });
    cy.get('#place_order').click();
  }

  validarPedidoConcluido() {
    cy.get('.woocommerce-notice').should(
      'contain',
      'Obrigado. Seu pedido foi recebido.'
    );
  }
}

export default new CheckoutPage();
