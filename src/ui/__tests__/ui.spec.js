
/// <reference types="Jest"/>

import { mostrarListaPokemones,mostrarPokemon } from "../ui.js";
import  listaPokemones  from "./fixtures/listaPokemones.js"

test('Muestra el listado de pokemones',() => {
  document.body.innerHTML = '<ul class="contenedor-pokemones"></ul>'
})


