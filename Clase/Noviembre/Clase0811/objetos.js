// Forma antigua, por objetos
function Persona(nom, ape, ed) {
  this.nombre = nom
  this.apellido = ape
  this.edad = ed
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido
  }
  toString: () => {
    return `Me llamo ${this.nombreCompleto} y tengo ${this.edad}`
  }
}

const ana = new Persona("Ana", "Hoyo", 23)
const paco = new Persona("Paco", "Martinez", 27)

ana.nacionalidad = "Inglesa"

Persona.prototype.fecha = new Date().toLocaleString()

console.log(ana.nombreCompleto())
console.log(ana.nacionalidad)
console.log(paco.fecha)

Persona.prototype.boda = '2003'
// Persona.prototype.


// Forma actualizada, por clases
class persona{
  constructor(nombre){
    this.nombre = nombre
  }

   saludar() {
    return `Hola soy ${this.nombre}`
  }
}

