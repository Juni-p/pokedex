/// <reference types="Jest"/>

import { cargarPokemon } from "../pokemon.js";

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

describe('cargarPokemon',()=>{
  beforeEach(() => {
    window.localStorage.clear();
    global.fetch = jest.fn();
   });

  test('Cargar pokemon sin identificador da error',()=>{
    return expect(cargarPokemon()).rejects.toThrowError(new Error('Se necesita un identificador para cargar un pokemón'))
  })
  
  test('Cargar pokemon devuelve un pokemon',()=>{
    const idMock = 'charizard'
      const jsonMock = {
        nombre: "charizard",
        peso: 905,
        altura: 17,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
      }
      setLocalStorage(`pokemon_${idMock}`, jsonMock)
      return expect(cargarPokemon(idMock)).resolves.toMatchObject(jsonMock)
  })
})