import { mostrarPokemon } from "../ui/ui.js";
import { cargarPokemon } from "../servicios/pokemon.js";
import { cambiarPagina } from "../paginador/paginador.js";

async function manejarEventosPokemon($listaPokemones) {
  $listaPokemones.addEventListener('click', async function(event){
     mostrarPokemon(await cargarPokemon(event.target.id))
  })
}

export default async function inicializar() {
  const $listaPokemones = document.querySelector(".contenedor-pokemones");

  cambiarPagina();
  await manejarEventosPokemon($listaPokemones);
}


