export const enterEmail = (email: string) => {
  cy.get('input[type="email"]')
    .clear()
    .click()
    .type(email)
    .should("have.value", email)
}
