/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
import produtos from '../fixtures/produtos.json';
import homePage from '../support/page_objects/home.page';
import produtoPage from '../support/page_objects/produto.page';
import carrinhoPage from '../support/page_objects/carrinho.page';
import checkoutPage from '../support/page_objects/checkout.page';



describe('Exercício - Testes End-to-End - Fluxo de pedido', () => {

    const dadosFaturamento = {
        nome: faker.person.firstName(),
        sobrenome: faker.person.lastName(),
        empresa: faker.company.name(),
        //pais: 'Canadá',
        endereco: faker.location.streetAddress(),
        cidade: faker.location.city(),
        //estado: 'SP',
        cep: '01000-000',
        telefone: faker.phone.number('##########'),
        email: faker.internet.email()
    };

    beforeEach(() => {
        cy.visit('');

    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //Adicionar 4 produtos diferentes ao carrinho
        homePage.acessarPrimeiroProduto();
        produtos.forEach((produto) => {
            produtoPage.selecionarTamanho(produto.tamanho);
            produtoPage.selecionarCor(produto.cor);
            produtoPage.adicionarAoCarrinho();
            cy.get('.reset_variations').click()

        });

        carrinhoPage.irParaCarrinho();
        carrinhoPage.validarQuantidadeDeItens(4);
        carrinhoPage.prosseguirParaCheckout();
        checkoutPage.preencherDadosFaturamento(dadosFaturamento);
        checkoutPage.finalizarPedido();
        checkoutPage.validarPedidoConcluido();

    });

});