window.addEventListener('load', () => {
  class Coche {
    constructor(marca) {
      this._marca = marca
    }

    get marca() {
      return this._marca
    }

    set marca(marca) {
      this._marca = marca
    }

    anuncio() {
      return `Ha llegado el nuevo coche de ${this._marca}`
    }
  }

  class Modelo extends Coche {
    constructor(marca, modelo) {
      super(marca)
      this._modelo = modelo
    }

    get modelo() {
      return this._modelo
    }

    set modelo(modelo) {
      this._modelo = modelo
    }

    anuncioCompleto() {
      return `${super.anuncio()}: el modelo ${this._modelo}`
    }
  }

  const miCoche = new Modelo('Toyota', 'Yaris')
  miCoche.marca = 'Tesla'
  document.body.innerHTML = miCoche.anuncioCompleto()
})
