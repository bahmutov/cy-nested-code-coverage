// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

console.log('in spec.js')
// debugger

it('test a', () => {
  console.log('in test a')
  cy.wait(1000)
})

it('test b', () => {
  console.log('in test b')
  cy.wait(1000)
})

it('test c', () => {
  console.log('in test c')
  cy.wait(1000)
})