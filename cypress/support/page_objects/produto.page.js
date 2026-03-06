class ProdutoPage {
  selecionarTamanho(tamanho) {
    cy.get(`.button-variable-item-${tamanho}`).click().wait(1000);
  }

  selecionarCor(cor) {
    cy.get(`.button-variable-item-${cor}`).click().wait(1000);
  }



  adicionarAoCarrinho() {
    cy.get('.single_add_to_cart_button').should('be.visible')
      .and('not.be.disabled').click();
  }
}

export default new ProdutoPage();
