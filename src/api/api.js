export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export function obtenerPokemones(url = BASE_URL) {
    return fetch(url)
      .then((res) => res.json())
      .then((pokemones) => pokemones)
  }

export function obtenerPokemon(nombrePokemon) {
  if (nombrePokemon === undefined) {
    throw new Error('Se necesita un nombre para cargar un pokemon');
  }
  return fetch(BASE_URL + nombrePokemon)
    .then((res) => res.json())
    .then((pokemon) => pokemon);
}