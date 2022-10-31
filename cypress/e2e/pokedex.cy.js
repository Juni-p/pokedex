/// <reference types="Cypress" />

const URL = "index.html";

context("Pokedex", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Usa la pokedex", () => {
    const CANTIDAD_BOTONES_PAGINADOR = 2;
    const CANTIDAD_ITEMS_POKEMONES = 20;
    it("se asegura que carga correctamente", () => {
      cy.get('[data-test="pokemones"]')
        .find('[data-test="item-pokemon"]')
        .should("have.length", CANTIDAD_ITEMS_POKEMONES);
      cy.get('[data-test="botones"]').should(
        "have.length",
        CANTIDAD_BOTONES_PAGINADOR
      );
      cy.get('[data-test="pokemon-info"]').within(() => {
        cy.get('[data-test="nombre-pokemon"]').contains("POKEMON");
        cy.get('[data-test="imagen-pokemon"]')
          .should("be.visible")
          .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
          });
        cy.get('[data-test="peso"]').contains("Peso:");
        cy.get('[data-test="altura"]').contains("Altura:");
      });
    });
  });

  describe("Busca un pokemon", () => {
    it("Se asegura que la información del pokemon cargue correctamente", () => {
      cy.get('[data-test="item-pokemon"]').eq(0).click();
      cy.get('[data-test="nombre-pokemon"]').contains("bulbasaur");
      cy.get('[data-test="peso-pokemon"]').contains("69");
      cy.get('[data-test="altura-pokemon"]').contains("7");
    });
  });

  describe("Usa la paginación", () => {
    const listaPokemonesPagina1 = [];
    const listaPokemonesPagina2 = [];
    const listaPokemonesPagina3 = [];

    it("Se asegura que la paginación funcione correctamente", () => {
      cy.get('[data-test="item-pokemon"]').then((pokemones) => {
        pokemones.each(function (i, pokemon) {
          listaPokemonesPagina1.push(pokemon.id);
        });
      });

      cy.get('[data-test="botones"]').eq(1).click();
      cy.wait(1000);

      cy.get('[data-test="item-pokemon"]').then((pokemones) => {
        pokemones.each(function (i, pokemon) {
          listaPokemonesPagina2.push(pokemon.id);
        });

        cy.wrap(listaPokemonesPagina1).should(
          "not.deep.equal",
          listaPokemonesPagina2
        );
      });

      cy.get('[data-test="botones"]').eq(0).click();
      cy.wait(1000);

      cy.get('[data-test="item-pokemon"]').then((pokemones) => {
        pokemones.each(function (i, pokemon) {
          listaPokemonesPagina3.push(pokemon.id);
        });
        cy.wrap(listaPokemonesPagina1).should(
          "deep.equal",
          listaPokemonesPagina3
        );
      });
    });
  });
});
