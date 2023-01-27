import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "que tengo un carrito de compras con el producto {string}",
  (productName) => {
    cy.visit("/");
    cy.get("[data-rs-event-name='Select Menu'] > a").click();
    cy.contains("[title]", productName).parents("a").find("button").click();
  }
);

When("agrego el producto", () => {
  cy.get("#add-to-cart-button").click();
});
