/// <reference types="Jest"/>

import { cambiarPagina } from "../paginador.js";
import { obtenerPokemones } from "../../api/api.js"
import { mostrarListaPokemones } from "../../ui/ui.js";

jest.mock("../../api/api.js", () => jest.fn())
jest.mock("../../ui/ui.js", () => jest.fn())

test('Carga pagina principal de pokemones',async ()=>{

})