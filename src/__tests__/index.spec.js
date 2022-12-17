/// <reference types="Jest"/>

import inicializar from "../pokedex/pokedex.js";
import '../index.js'

jest.mock('../pokedex/pokedex.js', () => jest.fn());

test('inicializa pokedex', () => {
  expect(inicializar).toHaveBeenCalledTimes(1);
});