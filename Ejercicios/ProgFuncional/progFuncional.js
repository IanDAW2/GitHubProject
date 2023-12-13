// Dados la lista de numeros:
const numeros = [1, 2, 3, 4, 5]
// Usar map, filter y reduce para obtener los números duplicados, obtener los pares y la suma de todos.

const duplicados = numeros.map(numero => numero * 2)

console.log(duplicados)

const numerosPares = numeros.filter(numero => numero % 2 == 0)

console.log(numerosPares)

const sumaTodos = numeros.reduce((suma, numero) => (suma += numero))

console.log(sumaTodos)
