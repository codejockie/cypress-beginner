export const enterName = (name: string) => {
  cy.get('input[name="name"]')
    .clear()
    .click()
    .type(name)
    .should("have.value", name)
}
