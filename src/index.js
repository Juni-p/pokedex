import {
  manejarEventosPokemon,
  obtenerPaginaAnterior,
  obtenerPaginaSiguiente,
  obtenerPokemones,
} from "./pokedex.js";
import { mostrarListaPokemones, mostrarPokemon } from "./ui.js";

async function inicializar() {
  const $listaPokemones = document.querySelector(".contenedor-pokemones");
  mostrarListaPokemones(await obtenerPokemones());
  manejarEventosPokemon($listaPokemones, mostrarPokemon);
  document.querySelector(".btnAnterior").onclick = obtenerPaginaAnterior;
  document.querySelector(".btnSiguiente").onclick = obtenerPaginaSiguiente;
}

inicializar();
