/// <reference types="Cypress" />
// This mock data contains only 7 items instead of 8. This is for test the cy.intercept intercepting the graphql call.
import data from "../cypress/fixtures/graphql.json";

describe("ScandiWeb Store CART tests", () => {

	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.intercept("http://localhost:4000", data); //data mock
	});

	it("Enters the cart page with empty bag", () => {
		cy.get('[alt="cart-logo"]').click()
		cy.contains("Oops!")
	});

	it("Adds first item to the cart, later can be found in cart", () => {
		cy.get('img[data-cy="product-modal-button"]').first().click()
		cy.get('button[data-cy="add-to-cart-button"]').click()
		cy.get('[alt="cart-logo"]').click()
		cy.contains("Qty:")
		cy.contains("1")
		cy.contains("TOTAL")
		cy.contains("Sub:")
		cy.contains("518.47")
		cy.contains("Jacket")
	});

	it("User can shop, go to the cart an then continue shopping", () => {
		cy.get('img[data-cy="product-modal-button"]').first().click()
		cy.get('button[data-cy="add-to-cart-button"]').click()
		cy.get('[alt="cart-logo"]').click()
		cy.contains("Jacket")
		cy.get('[alt="cart-logo"]').click()
		cy.contains("iPhone 12 Pro")
		cy.contains("AirTag")
	});

	it("User can shop, go to the cart an then continue shopping for other items being added to the cart", () => {
		cy.get('img[data-cy="product-modal-button"]').first().click()
		cy.get('button[data-cy="add-to-cart-button"]').click()
		cy.get('[alt="cart-logo"]').click()
		cy.contains("Jacket")
		cy.get('[alt="cart-logo"]').click()
		cy.contains("iPhone 12 Pro")
		cy.contains("AirTag")
		cy.get('img[data-cy="product-modal-button"]').eq(1).click()
		cy.get('button[data-cy="add-to-cart-button"]').click()
		cy.get('[alt="cart-logo"]').click()
		cy.contains("iMac 2021")
		cy.contains("ORDER").click()
	});

});	