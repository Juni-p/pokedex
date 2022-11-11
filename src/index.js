import { manejarEventosPokemon, obtenerPokemones } from "./pokedex.js";
import { mostrarListaPokemones } from "./ui.js";

async function inicializar() {
  const $listaPokemones = document.querySelector(".contenedor-pokemones");
  mostrarListaPokemones(await obtenerPokemones());
  await manejarEventosPokemon($listaPokemones);
}

inicializar();
