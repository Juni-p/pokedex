const URL = "https://pokeapi.co/api/v2/pokemon/";

function obtenerPokemones(pokemones) {
  try {
    fetch(pokemones)
      .then((res) => res.json())
      .then((data) => {
        mostrarListaPokemones(data.results);
      });
  } catch (error) {
    console.error(error);
  }
}

function mostrarListaPokemones(pokemones) {
  pokemones.forEach((pokemon) => {
    crearItemPokemon(pokemon.name);
  });
}

function crearItemPokemon(pokemon) {
  const $item = document.createElement("li");
  $item.id = pokemon;
  $item.textContent = pokemon;
  document.querySelector("ul").appendChild($item);
}

function manejarEventosPokemon($listaPokemones) {
  $listaPokemones.onclick = function (event) {
    const $pokemon = event.target;
    $pokemon.onclick = obtenerPokemon($pokemon.id);
  };
}

function obtenerPokemon(nombrePokemon) {
  try {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}/`)
      .then((res) => res.json())
      .then((data) => mostrarPokemon(data));
  } catch (error) {
    console.error(error);
  }
}

function mostrarPokemon(pokemonData) {
  const nombre = pokemonData.name;
  const peso = pokemonData.weight;
  const altura = pokemonData.height;
  const imagen = pokemonData.sprites["front_default"];

  document.querySelector(".imagen").src = imagen;
  document.querySelector(".nombre").textContent = nombre;
  document.querySelector(".peso").textContent = peso;
  document.querySelector(".altura").textContent = altura;
}

function manejarPagina(paginador) {
  paginador.onclick = function (event) {
    event.preventDefault();
    const url = event.target.href;
    obtenerPokemones(url);
  };
}

obtenerPokemones(URL);
manejarEventosPokemon(document.querySelector("ul"));
