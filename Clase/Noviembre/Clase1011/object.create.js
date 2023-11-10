var Animal = {
  tipo: "Invertebrado",
  verTipo: function () {
    console.log(this.tipo)
  },
}

var animal = Object.create(Animal)

// Metodos de this: call, apply, bind

const persona1 = {
  nombre: "pedro",
  apellido: "Lopez",
  nombreCompleto: function (/* Apply *ciudad, pais */) {
    return (
      this.nombre + " " + this.apellido
    ) /* Apply *+ " " + ciudad + ", " + pais */
  },
}
const persona2 = { nombre: "Lara", apellido: "Garcia" }

// console.log(persona1.nombreCompleto.apply(persona2 /* Apply * , ["Madrid", "España"]*/))

const nombreCompleto2 = persona1.nombreCompleto.bind(persona2)
console.log(nombreCompleto2())
