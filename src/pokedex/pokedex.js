import { mostrarPokemon } from "../ui/ui.js";
import { obtenerPokemon } from "../api/api.js";
import Pokemon from "../entidades/pokemon.js";

export async function manejarEventosPokemon($listaPokemones) {
  $listaPokemones.addEventListener('click', async function(event){
    await obtenerPokemon(event.target.id)
      .then(pokemonData => {
        const pokemon = new Pokemon(pokemonData)
        mostrarPokemon(pokemon)
      })
  })
}
