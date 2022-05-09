/// <reference types="Cypress" />
// This mock data contains only 7 items instead of 8. This is for test the cy.intercept intercepting the graphql call.
import data from "../cypress/fixtures/graphql.json";

describe("ScandiWeb Store PRODUCTS tests", () => {

	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.intercept("http://localhost:4000", data); //data mock
	});

	it("Title can be found", () => {
		cy.contains("Scandiweb Store")  
	});

	it("First item exists (Jacket)", () => {
		cy.contains("Jacket")  
	});

	it("OUT OF STOCK functions properly", () => {
		cy.contains("OUT OF STOCK")  
	});

	it("Cart button exists", () => {
		cy.get('[alt="cart-logo"]').click()
	});

	it("Enters the cart page and finds 'Continue shoping text'", () => {
		cy.get('[alt="cart-logo"]').click()
		cy.contains("CONTINUE SHOPPING")
	});

	it("Can found first button with data-cy attr", () => {
		cy.get('img[data-cy="product-modal-button"]').first().click()
	});

	it("Can found first button with data-cy attr and close the modal", () => {
		cy.get('img[data-cy="product-modal-button"]').first().click()
		cy.contains("Close").click()
	});

	it("Can click on the ADD TO CART button", () => {
		cy.get('img[data-cy="product-modal-button"]').first().click()
		cy.get('button[data-cy="add-to-cart-button"]').click()
	});

	it("First item contains Size and decorator text", () => {
		cy.get('img[data-cy="product-modal-button"]').first().click()
		cy.contains("Size:")
		cy.contains("Awesome winter jacket")
	});

	it("The page contains all products intercepting the URL and using fixture data with 7 products", () => {
		cy.get('[data-test-id="product"]').should("have.length", 7)
	});

	it("Should throw nothing in the screen without data", () => {
		cy.intercept("http://localhost:4000", [])
		cy.get('[data-test-id="product"]').should("have.length", 0)
	});

});