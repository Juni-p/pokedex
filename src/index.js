import { cambiarPagina } from "./paginador.js";
import { manejarEventosPokemon } from "./pokedex.js";

async function inicializar() {
  const $listaPokemones = document.querySelector(".contenedor-pokemones");

  cambiarPagina();
  await manejarEventosPokemon($listaPokemones);
}

inicializar();
