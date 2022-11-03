const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
let paginaAnterior = "";
let paginaSiguiente = "";

export function obtenerPokemones() {
  return fetch(BASE_URL)
    .then((res) => res.json())
    .then((pokemones) => pokemones.rates);
}

function obtenerPokemon(nombrePokemon) {
  return fetch(BASE_URL + nombrePokemon)
    .then((res) => res.json())
    .then((pokemon) => pokemon);
}

export function obtenerPaginaAnterior() {
  if (paginaAnterior) obtenerPokemones(paginaAnterior);
}

export function obtenerPaginaSiguiente() {
  if (paginaSiguiente) obtenerPokemones(paginaSiguiente);
}

export function manejarEventosPokemon($listaPokemones) {
  $listaPokemones.onclick = function (event) {
    const $pokemon = event.target;
    $pokemon.onclick = obtenerPokemon($pokemon.id);
  };
}
