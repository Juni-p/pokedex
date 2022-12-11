import { cambiarPagina } from "./paginador/paginador.js";
import { manejarEventosPokemon } from "./pokedex/pokedex.js";

async function inicializar() {
  const $listaPokemones = document.querySelector(".contenedor-pokemones");

  cambiarPagina();
  await manejarEventosPokemon($listaPokemones);
}

inicializar();
