export const enterMessage = (message: string) => {
  cy.get("textarea").clear().click().type(message).should("have.value", message)
}
