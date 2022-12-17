class Pokemon{
  constructor(data){
    this.nombre = data.name
    this.peso = data.weight
    this.altura = data.height
    this.imagen = data.sprites["front_default"]
  }
}

export default Pokemon;