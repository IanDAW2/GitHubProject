// Creacion con string
const fecha1 = new Date("October 12 2023")
const fecha2 = new Date("2023-05-27")
const fecha3 = new Date("2023")

console.log("Fecha October 12 2023: " + fecha1)
console.log("Fecha 2023-05-27: " + fecha2)
console.log("Fecha 2023: " + fecha3)

// Creacion con numeros
const fechaMili = new Date(864000000)
const fechaLarga = new Date(2015, 11, 10, 14, 30, 25)
const fechaCorta = new Date(2015, 11, 10)

console.log("Fecha Milisegundos: " + fechaMili)
console.log("Fecha Larga: " + fechaLarga)
console.log("Fecha Corta: " + fechaCorta)

// Metodos de Date
const fecha = new Date()
console.log("Fecha: " + fecha)
console.log("Fecha.toString: " + fecha.toString())
console.log("Fecha.toUTCString: " + fecha.toUTCString())
console.log("Fecha.toDateString: " + fecha.toDateString())

// Metodos Get
console.log("getDate: " + fecha)
