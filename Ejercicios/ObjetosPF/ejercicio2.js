/**
 * Se pide:
 * 1. Filtrar los usuarios mayores de edad (mayores o igual a 18 años).
 * 2. Calcular el promedio de edades de los usuarios filtrados.
 * 3. Encontrar al usuario más joven de entre los filtrados.
 * 4. Obtener una lista de nombres de usuarios que empiezan con la letra 'A'.
 */
// Lista de usuarios
const usuarios = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Pedro', edad: 20 },
  { id: 4, nombre: 'Ana', edad: 35 },
  { id: 5, nombre: 'Luisa', edad: 22 },
  { id: 6, nombre: 'Alberto', edad: 19 },
]

const mayoresDeEdad = usuarios.filter(usuario => usuario.edad >= 18)

// console.log(mayoresDeEdad)

<<<<<<< HEAD
const promedioEdades = (usuarios.reduce((total, usuario) => (total += usuario.edad), 0) / usuarios.length).toFixed(2)
=======
const promedioEdades = (
  usuarios.reduce((total, usuario) => (total += usuario.edad), 0) / usuarios.length
).toFixed(2)
>>>>>>> EjerObjetosPF2

console.log(promedioEdades)

const usuarioJoven = usuarios.reduce((min, usuario) => (usuario.edad > min ? min : usuario))

console.log(usuarioJoven)

const usuariosA = usuarios.filter(usuario => usuario.nombre.startsWith('A'))

console.log(usuariosA)
