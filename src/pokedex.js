import { mostrarPokemon } from "./ui.js";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export function obtenerPokemones(url = BASE_URL) {
  return fetch(url)
    .then((res) => res.json())
    .then((pokemones) => pokemones);
}

export function obtenerPokemon(nombrePokemon) {
  return fetch(BASE_URL + nombrePokemon)
    .then((res) => res.json())
    .then((pokemon) => pokemon);
}

export async function manejarEventosPokemon($listaPokemones) {
  $listaPokemones.onclick = async function (event) {
    const $pokemon = event.target;
    $pokemon.onclick = mostrarPokemon(await obtenerPokemon($pokemon.id));
  };
}
