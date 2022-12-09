function crearItemPokemon(pokemon) {
  const $item = document.createElement("li");
  $item.id = pokemon;
  $item.setAttribute("data-test", "item-pokemon");
  $item.textContent = pokemon;
  document.querySelector(".contenedor-pokemones").appendChild($item);
}

function limpiarPokemones() {
  document.querySelector(".contenedor-pokemones").innerText = "";
}

export function mostrarListaPokemones(pokemones) {
  limpiarPokemones();
  pokemones.forEach((pokemon) => {
    crearItemPokemon(pokemon.name);
  });
}

export function mostrarPokemon(pokemonData) {
  const nombre = pokemonData.name;
  const peso = pokemonData.weight;
  const altura = pokemonData.height;
  const imagen = pokemonData.sprites["front_default"];

  document.querySelector(".imagen").src = imagen;
  document.querySelector(".nombre").textContent = nombre;
  document.querySelector(".peso").textContent = peso;
  document.querySelector(".altura").textContent = altura;
}
