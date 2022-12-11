import { obtenerPokemones } from "../api/api.js";
import { mostrarListaPokemones } from "../ui/ui.js";

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
}

function manejarEventosPaginador($paginador) {
  $paginador.addEventListener('click',async function(event){
    const $boton = event.target
    if ($boton.classList[0] === "btnAnterior") {
      obtenerPaginaAnterior(paginaAnterior);
    }
    if ($boton.classList[0] === "btnSiguiente") {
      obtenerPaginaSiguiente(paginaSiguiente);
    }
  })
}

async function obtenerPaginaAnterior(urlAnterior) {
  if (urlAnterior) {
    const pokemones = await obtenerPokemones(urlAnterior);
    paginaAnterior = pokemones.previous;
    paginaSiguiente = pokemones.next;
    mostrarListaPokemones(pokemones.results);
  }
}

async function obtenerPaginaSiguiente(urlSiguiente) {
  if (urlSiguiente) {
    const pokemones = await obtenerPokemones(urlSiguiente);
    paginaAnterior = pokemones.previous;
    paginaSiguiente = pokemones.next;
    mostrarListaPokemones(pokemones.results);
  }
}
