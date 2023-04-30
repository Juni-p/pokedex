/// <reference types="Jest"/>

import Pokemon from "../pokemon.js";
import charizard from "./fixtures/charizard.json"

test('Construye un nuevo objeto pokemon',()=>{
  const pokemonCharizard = new Pokemon(charizard)
  expect(pokemonCharizard).toMatchObject({
    nombre: "charizard",
    peso: 905,
    altura: 17,
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  })
})