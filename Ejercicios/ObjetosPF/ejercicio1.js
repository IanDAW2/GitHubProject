// Enunciado del problema:
// Se tiene una lista de usuarios con la siguiente estructura:
const usuarios = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Pedro', edad: 20 },
  { id: 4, nombre: 'Ana', edad: 35 },
]

/**
 * Se requiere:
 * Filtrar los usuarios mayores de 25 años.
 * Duplicar la edad de esos usuarios filtrados.
 * Obtener la suma total de las edades duplicadas.
 */

const mayores25 = usuarios.filter(usuario => usuario.edad > 25)

console.log(mayores25)

// 1º forma Profesor
/*
const duplicarEdad = usuarios => usuarios.map(usuario => ({...usuario,edad:usuario.edad*2}))

const usuarioEdadDuplicada = duplicarEdad(mayores25)
console.log(usuarioEdadDuplicada)

const sumaTotal = usuarioEdadDuplicada.reduce((suma, usuario) => (suma += usuario.edad), 0)

console.log(sumaTotal)
*/

//2º forma YO

const duplicarEdad = mayores25.map(usuario => {
  usuario.edad *= 2
  return usuario
})

console.log(duplicarEdad)

const sumaTotal = duplicarEdad.reduce((suma, usuario) => (suma += usuario.edad), 0)

console.log(sumaTotal)
