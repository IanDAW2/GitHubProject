const notas = [5.2, 3.9, 6, 9.75, 7.5, 3]
const aprobados = notas.filter(nota => nota >= 5)

// console.log(aprobados) // [ 5.2, 6, 9.75, 7.5 ]

// nota >= 5 se evalua a 'true' si es cierto o 'false' si no lo es

const primerAprobado = notas.find(nota => nota >= 5) // devuelve el primer elemento que cumple la condicion
const primeraNotaIndex = notas.findIndex(nota => nota >= 8) // devuelve el indice del primer elemento que cumple la condicion

const every = notas.every(nota => nota < 10) // devuelve true si todos los elementos cumplen la condicion
const some = notas.some(nota => nota >= 9) // devuelve true si alguno de los elementos cumplen la condicion, basta con que solo lo cumpla uno

const notasSubidasMap = notas.map(nota => nota * 0.5)

const sumaNotas = notas.reduce((total, nota) => (total += nota)) // total 35.55
const maxNota = notas.reduce((max, nota) => (nota > max ? nota : max)) // max = 9.75

const notaMedia = notas.reduce((suma, nota) => (suma += nota)) / notas.length // 5.891666666666667
const notaMediaRed = Math.round(notaMedia) // 5.891666666666667

console.log(notaMediaRed)
