export default `<div class="card contenedor-pokemon sm-4 col" data-test="pokemon-info">
          <div class="card-header">
            <strong class="nombre" data-test="nombre-pokemon">POKEMON</strong>
          </div>
          <img
            src="src/img/pokemon.png"
            alt="pokemon"
            class="imagen"
            data-test="imagen-pokemon"
          />
          <div>
            <ul class="poke-atributos">
              <li class="poke-info" data-test="peso">
                Peso: <strong class="peso" data-test="peso-pokemon"></strong>
              </li>
              <li class="poke-info" data-test="altura">
                Altura:
                <strong class="altura" data-test="altura-pokemon"></strong>
              </li>
            </ul>
            <div class="card-footer"></div>
          </div>
        </div>`