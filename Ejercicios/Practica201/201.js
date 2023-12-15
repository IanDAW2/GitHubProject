// 1.- Obtener la fecha y hora actual

const hoy = new Date()

console.log(hoy.toUTCString());

// 2.- Mezclar dos Arrays

const lista1 = [1, 2, 3, 4, 5]
const lista2 = [6, 7, 8, 9, 10]

// const lista3 = [...lista1, ...lista2]
const lista3 = lista1.concat(lista2)

console.log(lista3)

// 3.- Borrar elementos repetidos en un array

const listaRepetidos = [5, 2, 5, 4, 5]

const setAux = new Set(listaRepetidos)

const noRepetidos = [...setAux]

console.log(noRepetidos)

// 4.- Generar un número aleatorio entre dos valores dados

const valor1 = 5
const valor2 = 10

const numeroAleatorio = Math.round(Math.random() * (valor2 - valor1) + valor1)

console.log(numeroAleatorio)

// 5.- Generar una cadena alfanumérica aleatoria

var cadena = ''

for (let index = 0; index < 10; index++) {
  cadena += Math.floor(Math.random() * 100).toString(36)
}

console.log(cadena)

// 6.- Convertir un objeto en un array

const objeto = {
  nombre: 'ian',
  salud: 30,
}
const arrayObjeto = Object.values(objeto)

console.log(arrayObjeto)

// 7.-  Copiar texto al portapapeles

const portapapeles = 'Esto es una prueba para copiar en el portapapeles...'

navigator.clipboard.writeText(portapapeles)

// 8.- Comprobar si una propiedad existe IN un objeto

const propiedadObjeto = objeto.hasOwnProperty('salud')

console.log(propiedadObjeto)

// 9.- Ordenar un Array en orden ascendente

// [5, 2, 5, 4, 5]
const listaOrdenada = listaRepetidos.sort((num1, num2) => num1 - num2)

console.log(listaOrdenada)

// 10.-  Obtener la longitud de un objeto

const longitud = Object.values(objeto).length

console.log(longitud)
