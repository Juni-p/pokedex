import { obtenerPaginaAnterior, obtenerPaginaSiguiente } from "./paginador.js";
import { manejarEventosPokemon, obtenerPokemones } from "./pokedex.js";
import { mostrarListaPokemones } from "./ui.js";

async function inicializar() {
  const $listaPokemones = document.querySelector(".contenedor-pokemones");
  mostrarListaPokemones(await obtenerPokemones());
  await manejarEventosPokemon($listaPokemones);
  document.querySelector(".btnAnterior").onclick = obtenerPaginaAnterior;
  document.querySelector(".btnSiguiente").onclick = obtenerPaginaSiguiente;
}

inicializar();
