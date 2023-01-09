//// <reference types="cypress" />
var chance = require("chance").Chance()
context("Compras", () => {
  it("Deve ser possível adicionar um item ao carrinho e ir para o checkout", () => {
    cy.login()
    cy.contains("Add to cart").first().click()
    // Assert para verificar se no icone do carrinho foi adicionado um item.
    cy.get(".shopping_cart_link").then(($cart) => {
      let cart = $cart.text()
      expect(parseInt(cart)).to.eq(1)
    })
    cy.get(".shopping_cart_badge").click()
    cy.get("#checkout").click()
    cy.get("#first-name").type(chance.first())
    cy.get("#last-name").type(chance.last())
    cy.get("#postal-code").type(chance.zip())
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  })
})
