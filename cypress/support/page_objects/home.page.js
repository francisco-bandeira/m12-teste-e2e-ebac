class HomePage {
  acessarPrimeiroProduto() {
    cy.get('.products .product').first().click().wait(1000);
  }
}

export default new HomePage();
