import { obtenerPokemones } from "./pokedex";

export let paginaAnterior;
export let paginaSiguiente;

export function obtenerPaginaAnterior() {
  if (paginaAnterior) obtenerPokemones(paginaAnterior);
}

export function obtenerPaginaSiguiente() {
  if (paginaSiguiente) obtenerPokemones(paginaSiguiente);
}

document.querySelector(".btnAnterior").onclick = obtenerPaginaAnterior;
document.querySelector(".btnSiguiente").onclick = obtenerPaginaSiguiente;
