describe("HomePage", () => {
  // For desktop view
  context("720p resolution", () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
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
    })
  })
})
