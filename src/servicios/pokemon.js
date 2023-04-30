import { obtenerPokemon } from "../api/api.js";
import { cargarPokemonDeLocalStorage,guardarPokemonEnLocalStorage } from "../storage/pokemon.js";
import Pokemon from "../entidades/pokemon.js";

export async function cargarPokemon(id) {
  if (id === undefined) {
    throw new Error('Se necesita un identificador para cargar un pokemón');
  }

  let pokemon;

  try {
    pokemon = cargarPokemonDeLocalStorage(id);
  } catch (e) {
    const pokemonData = await obtenerPokemon(id);
    pokemon = new Pokemon(pokemonData);
    guardarPokemonEnLocalStorage(id, pokemon);
  }

  return pokemon;
}