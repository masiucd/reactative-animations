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
      it("When clicking on the button", () => {
        cy.get("[data-cy=stop-loading-btn]").contains("Stop Loading")
        cy.get("[data-cy=stop-loading-btn]").click()
      })
    })
  })
})
