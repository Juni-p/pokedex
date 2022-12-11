const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export function obtenerPokemones(url = BASE_URL) {
  try {
    return fetch(url)
      .then((res) => res.json())
      .then((pokemones) => pokemones)
  } catch (error) {
    console.error('Ha ocurrido el siguiente error: ', error)
  }
}

export function obtenerPokemon(nombrePokemon) {
  try {
    return fetch(BASE_URL + nombrePokemon)
      .then((res) => res.json())
      .then((pokemon) => pokemon);
  } catch (error) {
    console.error('Ha ocurrido el siguiente error: ', error)
  }
}