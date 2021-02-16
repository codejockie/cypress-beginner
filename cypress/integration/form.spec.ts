import * as faker from "faker"
import { enterEmail } from "../support/enter-email"
import { enterMessage } from "../support/enter-message"
import { enterName } from "../support/enter-name"

describe("Form test", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Can fill the form", () => {
    enterName(faker.name.firstName(0))
    enterEmail(faker.internet.email())
    enterMessage(faker.lorem.paragraph())

    // Old API in use here (Cypress <= 4.9.0) - use .intercept() instead
    cy.server()
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Form saved!", code: 201 },
    })

    cy.get("form").submit()
    cy.contains("Form saved!")
  })
})
