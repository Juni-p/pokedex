const URL = "https://pokeapi.co/api/v2/pokemon/";
let paginaAnterior = null;
let paginaSiguiente = null;

function obtenerPokemones(pokemones) {
  try {
    fetch(pokemones)
      .then((res) => res.json())
      .then((data) => {
        mostrarListaPokemones(data.results);
        paginaAnterior = data.previous;
        paginaSiguiente = data.next;
      });
  } catch (error) {
    console.error(error);
  }
}

function mostrarListaPokemones(pokemones) {
  limpiarPokemones();
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

function limpiarPokemones() {
  document.querySelector("ul").innerText = "";
}

function obtenerPaginaAnterior() {
  if (paginaAnterior != null) obtenerPokemones(paginaAnterior);
}

function obtenerPaginaSiguiente() {
  if (paginaSiguiente != null) obtenerPokemones(paginaSiguiente);
}

obtenerPokemones(URL);
manejarEventosPokemon(document.querySelector("ul"));
document.querySelector(".btnAnterior").onclick = obtenerPaginaAnterior;
document.querySelector(".btnSiguiente").onclick = obtenerPaginaSiguiente;
