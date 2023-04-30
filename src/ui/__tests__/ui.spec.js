/// <reference types="Jest"/>

import { mostrarListaPokemones,mostrarPokemon } from "../ui.js";
import  listaPokemones  from "./fixtures/listaPokemones.js"
import estructuraCartaPokemon from "./fixtures/pokemonHtml.js";
import charizard from "./fixtures/charizard.js";

test('Muestra el listado de pokemones',() => {
  document.body.innerHTML = '<ul class="contenedor-pokemones"></ul>'
  mostrarListaPokemones(listaPokemones)
  const $pokemones = document.querySelectorAll('li')
  $pokemones.forEach(($pokemon,i) => {
    expect($pokemon.textContent).toBe(listaPokemones[i].name)
  })
  expect($pokemones).toHaveLength(listaPokemones.length)
})

test('Muestra la informacion de un pokemon',()=>{
  document.body.innerHTML = estructuraCartaPokemon
  mostrarPokemon(charizard)
  expect(document.querySelector(".imagen").src).toBe(charizard.imagen)
  expect(document.querySelector(".nombre").textContent).toBe(charizard.nombre)
  expect(Number(document.querySelector(".peso").textContent)).toBe(charizard.peso)
  expect(Number(document.querySelector(".altura").textContent)).toBe(charizard.altura)
})

