// Before - once, before all
// BeforeEach - runs before every block

describe("GalleryPage", () => {
  beforeEach(() => {
    cy.viewport(1220, 1120)
  })

  describe("When visit Gallery page", () => {
    it("should visit Gallery page", () => {
      cy.visit("/gallery")
    })

    it("title should exists", () => {
      cy.get(".main-title").contains("Gallery")
    })

    it("when clicking the annoying-btn", () => {
      cy.get(".annoying-btn").click()
      cy.get("[data-testid='repeated-box']").should("have.class", "box")
      cy.get(".annoying-btn").click()
      cy.get("[data-testid='repeated-box']").should("not.exist")
    })

    it("amount of images should be 12", () => {
      cy.get("[data-testid='gallery-grid'").children().should("have.length", 12)
    })
  })
})
