import { obtenerPokemones } from "./pokedex.js";
import { mostrarListaPokemones } from "./ui.js";

let paginaAnterior;
let paginaSiguiente;

export function pruebaAsignarUrl(urlNext, urlPrevious) {
  console.log(urlNext, urlPrevious);
  if (urlPrevious) {
    document.querySelector(".btnAnterior").href = urlPrevious;
  }
  if (urlNext) {
    document.querySelector(".btnSiguiente").href = urlNext;
  }
}

export async function cambiarPagina() {
  const pokemones = await obtenerPokemones();
  mostrarListaPokemones(pokemones.results);
  paginaAnterior = pokemones.previous;
  paginaSiguiente = pokemones.next;
  manejarEventosPaginador(document.querySelector(".paginacion"));
  console.log(paginaAnterior, paginaSiguiente);
}

function manejarEventosPaginador($paginador) {
  $paginador.onclick = function (event) {
    const $boton = event.target;
    $boton.onclick = async function () {
      console.log(paginaAnterior, paginaSiguiente);
      if ($boton.classList[0] === "btnAnterior") {
        obtenerPaginaAnterior(paginaAnterior);
      }
      if ($boton.classList[0] === "btnSiguiente") {
        obtenerPaginaSiguiente(paginaSiguiente);
      }
    };
  };
}

async function obtenerPaginaAnterior(urlAnterior) {
  if (urlAnterior) {
    const pokemones = await obtenerPokemones(urlAnterior);
    paginaAnterior = pokemones.previous;
    paginaSiguiente = pokemones.next;
    mostrarListaPokemones(pokemones.results);
    console.log(urlAnterior);
  }
}

async function obtenerPaginaSiguiente(urlSiguiente) {
  if (urlSiguiente) {
    const pokemones = await obtenerPokemones(urlSiguiente);
    console.log(pokemones);
    paginaAnterior = pokemones.previous;
    paginaSiguiente = pokemones.next;
    mostrarListaPokemones(pokemones.results);
  }
}
