

class CarrinhoPage {
  irParaCarrinho() {
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
  }

  validarQuantidadeDeItens(qtdEsperada) {
    cy.get('.mini-cart-items').should('contain', qtdEsperada)

  }

  prosseguirParaCheckout() {
    cy.xpath("(//div[@class='mini_cart_content']//a[contains(@class,'checkout') and contains(@class,'wc-forward')])[2]").click();
  }
}

export default new CarrinhoPage();
