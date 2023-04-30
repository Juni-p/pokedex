/// <reference types="Jest"/>

import { BASE_URL, obtenerPokemones, obtenerPokemon } from "../api";

beforeEach(()=>{
  global.fetch = jest.fn()
})

test('Obtiene 1 pokemon',()=>{
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));

  obtenerPokemon('charizard')
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalledWith(BASE_URL + 'charizard')
})

test('Obtener 1 pokemon sin id da error',()=>{
  expect(()=>{
    obtenerPokemon()
  }).toThrowError(new Error('Se necesita un nombre para cargar un pokemon'))
  expect(global.fetch).toHaveBeenCalledTimes(0)
})

test('Obtiene pokemones con parametros por default',()=>{
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));
  obtenerPokemones()
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalledWith(BASE_URL)
})

test('Obtiene pokemones con parametros definidos por el usuario',()=>{
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));
  obtenerPokemones('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
})