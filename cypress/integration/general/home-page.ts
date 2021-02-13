describe("HomePage", () => {
  beforeEach(() => {
    cy.viewport(720, 1120)
  })

  describe("When visit homepage", () => {
    it("should visit homepage", () => {
      cy.visit("/")
    })

    it("When clicking on the button stop loading button", () => {
      cy.get("[data-cy=stop-loading-btn]").contains("Stop Loading")

      cy.get("[data-cy=stop-loading-btn]").click()
      cy.contains("reactive animations")
    })

    it("when clicking on the show card button card should be rendered to the DOM", () => {
      cy.get(".show-btn").contains("show card")
      cy.get(".show-btn").click()
      cy.get(".show-case-card").contains("@masiucd")
    })

    it("when clicking on the show card button again card should NOT be rendered to the DOM", () => {
      cy.get(".show-btn").click()
      cy.get(".show-case-card").should("not.exist")
    })

    it("when clicking on the sign in button sign-in form should exist in the DOM", () => {
      cy.get(".nav-sign-in-btn").click()
      cy.get(".sign-in-form-2x")
      cy.get(".title").contains("sign in")
      cy.get(".switch-form").click()
      cy.get(".title").contains("sign up")
      cy.get(".close-modal-btn").click()
      cy.get(".sign-in-form-2x").should("not.exist")
    })
  })
})
