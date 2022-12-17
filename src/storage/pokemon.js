function obtenerKeyPokemon(id) {
  return `pokemon_${id}`;
}

export function cargarPokemonDeLocalStorage(id) {
  if (id === undefined) {
    throw new Error('Se necesita un identificador para cargar un pokemón');
  }

  const pokemon = JSON.parse(localStorage.getItem(obtenerKeyPokemon(id)));
  if (pokemon === null) {
    throw new Error(`Pokemon con id ${id} no encontrado`);
  }

  return pokemon;
}

export function guardarPokemonEnLocalStorage(id, pokemon) {
  if (id === undefined || typeof pokemon !== 'object') {
    throw new Error('Se necesita un identificador y un pokemon para guardar en localStorage');
  }

  localStorage.setItem(obtenerKeyPokemon(id), JSON.stringify(pokemon));
}