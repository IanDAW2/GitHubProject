  class Coche {
    constructor(marca, modelo, color) {
      this.marca = marca
      this.modelo = modelo
      this.color = color
    }
    mostrarDatos() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}`
    }
  }

  const coche1 = new Coche('Toyota', 'Yaris', 'Rojo')
  console.log(coche1.mostrarDatos())

  class CocheElectrico extends Coche {
    constructor(marca, modelo, color, autonomia) {
      super(marca, modelo, color)
      this.autonomia = autonomia
    }
    mostrarDatos() {
      ;`${super.mostrarDatos()} Autonomía: ${this.autonomia}km`
    }
  }

  const coche2 = new CocheElectrico('Tesla', 'Model 3', 'Blanco', 500)

  console.log(coche2.mostrarDatos())
