/// <reference types="Cypress" />
// This mock data contains only 7 items instead of 8. This is for test the cy.intercept intercepting the graphql call.
import data from "../cypress/fixtures/graphql.json";

describe("ScandiWeb Store BAG MODAL tests", () => {

	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.intercept("http://localhost:4000", data); //data mock
	});

	it("Can click the Cart Modal", () => {
		cy.get('img[data-cy="cart-modal-button"]').click()
	});

	it("Can see the Cart Modal empty with $0 total", () => {
		cy.get('img[data-cy="cart-modal-button"]').click()
		cy.contains("Total:")
		cy.contains("$")
		cy.contains("0")
	});

	it("Can adds one item and be shown in the cart modal", () => {
		cy.get('img[data-cy="product-modal-button"]').first().click()
		cy.get('button[data-cy="add-to-cart-button"]').click()
		cy.get('img[data-cy="cart-modal-button"]').click()
		cy.contains("518.47")
		cy.contains("Canada Goose")
	});

	it("Can add iPhone to the cart modal and visit cart after", () => {
		cy.get('img[data-cy="product-modal-button"]').eq(2).click()
		cy.get('button[data-cy="add-to-cart-button"]').click()
		cy.get('img[data-cy="cart-modal-button"]').click()
		cy.contains("iPhone 12 Pro")
		cy.get('button[data-cy="check-out-modal-button"]').click()
		cy.contains("CONTINUE SHOPPING")
	});

	it("Can add multiple items to the cart modal", () => {
		cy.get('img[data-cy="product-modal-button"]').eq(0).click()
		cy.get('button[data-cy="add-to-cart-button"]').click()
		cy.get('img[data-cy="product-modal-button"]').eq(1).click()
		cy.get('button[data-cy="add-to-cart-button"]').click()
		cy.get('img[data-cy="cart-modal-button"]').click()
		cy.contains("2206.5")
	});

});