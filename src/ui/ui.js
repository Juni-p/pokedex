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

export function mostrarPokemon(pokemon) {
  document.querySelector(".imagen").src = pokemon.imagen;
  document.querySelector(".nombre").textContent = pokemon.nombre;
  document.querySelector(".peso").textContent = pokemon.peso;
  document.querySelector(".altura").textContent = pokemon.altura;
}
