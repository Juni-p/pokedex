import { mostrarPokemon } from "../ui/ui.js";
import { cargarPokemon } from "../servicios/pokemon.js";

export async function manejarEventosPokemon($listaPokemones) {
  $listaPokemones.addEventListener('click', async function(event){
     mostrarPokemon(await cargarPokemon(event.target.id))
  })
}
