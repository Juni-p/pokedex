/// <reference types="Jest"/>
import { cargarPokemonDeLocalStorage, guardarPokemonEnLocalStorage } from "../pokemon";

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

describe('cargarPokemonDeLocalStorage', ()=>{
  beforeEach(() => {
   window.localStorage.clear();
  });

  test('Cargar pokemon de local storage sin identificador da error',()=>{
    expect(()=>{
      cargarPokemonDeLocalStorage()
    }).toThrowError(new Error('Se necesita un identificador para cargar un pokemón'))
  })
  
  test('Cargar pokemon de local storage da error si no encuentra un pokemon',()=>{
    const idMock = 'charizard'
    expect(()=>{
      cargarPokemonDeLocalStorage(idMock)
    }).toThrowError(new Error(`Pokemon con id ${idMock} no encontrado`))
  })

  test('Cargar pokemon de local storage devuelve un pokemon',()=>{
    const idMock = 'charizard'
    const jsonMock = {
      nombre: "charizard",
      peso: 905,
      altura: 17,
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    }
    setLocalStorage(`pokemon_${idMock}`, jsonMock)
    expect(cargarPokemonDeLocalStorage(idMock)).toMatchObject(jsonMock)
  })
})

describe('guardarPokemonEnLocalStorage', ()=>{
  beforeEach(() => {
   window.localStorage.clear();
  });

  test('Guardar pokemon en local storage sin identificador da error',()=>{
    expect(()=>{
      guardarPokemonEnLocalStorage()
    }).toThrowError(new Error('Se necesita un identificador y un pokemon para guardar en localStorage'))
  })

  test('Guardar pokemon en local storage sin un pokemon da error',()=>{
    expect(()=>{
      guardarPokemonEnLocalStorage('charizard')
    }).toThrowError(new Error('Se necesita un identificador y un pokemon para guardar en localStorage'))
  })

  test('Guardar pokemon en local storage sin un pokemon de tipo objeto da error',()=>{
    expect(()=>{
      guardarPokemonEnLocalStorage('charizard', '"nombre":"charizard"')
    }).toThrowError(new Error('Se necesita un identificador y un pokemon para guardar en localStorage'))
  })

  test('Guarda un pokemon en local storage',()=>{
    const idMock = 'charizard'
    const jsonMock = {
      nombre: "charizard",
      peso: 905,
      altura: 17,
      imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    }
    guardarPokemonEnLocalStorage(idMock,jsonMock)
    expect(cargarPokemonDeLocalStorage(idMock)).toMatchObject(jsonMock)
  })
})