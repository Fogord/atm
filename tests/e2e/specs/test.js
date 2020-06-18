// https://docs.cypress.io/api/introduction/api.html

describe("Test ATM", () => {
  context("Check signin", function() {
    beforeEach(function() {
      cy.visit("/");
    });

    describe("Visit first page", () => {
      it("check url", () => {
        cy.get(".card-title").contains("Authorization");
      });

      it("check bad pincode", () => {
        cy.get("#input").type("1234");
        cy.get(".btn")
          .should("not.be.disabled")
          .click();
        cy.get(".error").contains("span", "Error: Wrong pincode");
      });

      it("check bad pincode", () => {
        cy.get("#input").type("0000");
        cy.get(".btn")
          .should("not.be.disabled")
          .click();
        cy.url().should("include", "/cashWithdrawal");
        cy.get(".card-title").contains("Withdrawal");
      });
    });
  });

  context("Check withdrawal", function() {
    beforeEach(function() {
      cy.visit("/");
      cy.get("#input").type("0000");
      cy.get(".btn")
        .should("not.be.disabled")
        .click();
      cy.url().should("include", "/cashWithdrawal");
      cy.get(".card-title").contains("Withdrawal");

      cy.get(".btn").should("be.disabled");
    });

    describe("check choosen banknote", () => {
      it("not choosen", () => {
        cy.get("#input").type("0");
        cy.get(".btn")
          .should("not.be.disabled")
          .click();
        cy.get(".error").contains("span", "Error: Choose banknote");
      });
    });

    describe("check min max", () => {
      it("check min", () => {
        cy.get(".box > :nth-child(1)").click();
        cy.get("#input").type("0");
        cy.get(".btn")
          .should("not.be.disabled")
          .click();
        cy.get("span").contains("Error: Change amount");
      });

      it("check max", () => {
        cy.get(".box > :nth-child(1)").click();
        cy.get("#input").type("210");
        cy.get(".btn")
          .should("not.be.disabled")
          .click();
        cy.get("span").contains("Error: Change banknote or amount");
      });
    });

    describe("check correct amount", () => {
      it("correct amount", () => {
        cy.get(".box > :nth-child(1)").click();
        cy.get("#input").type("100");
        cy.get(".btn")
          .should("not.be.disabled")
          .click();
        cy.url().should("include", "/resultWithdrawal");
        cy.get(".card-title").contains("Withdrawal result");
        cy.get("p").contains("You withdrawaled 100 grn by 10 banknotes");
        cy.wait(3000);
        cy.url().should("include", "/");
      });

      it("auth after withdrawaled", () => {
        cy.visit("/resultWithdrawal");
        cy.url().should("include", "/");
      });
    });
  });
});
