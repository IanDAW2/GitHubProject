// Promesas
// 1. Crear una promesa que resuelva con el string 'Hola mundo!' y la imprima en consola

document.getElementById('btn').addEventListener('click', () => {
  console.log('Promesa creada')
  new Promise((resolve, reject) => {
    resolve('Hola mundo!')
  })
    .then((document.getElementById('p').innerHTML = PromisesResult))
    .finally(() => {
      console.log('Promesa resuelta')
    })
})

const datos = [
  {
    id: 1,
    nombre: 'Juan',
    edad: 18,
  },
  {
    id: 2,
    nombre: 'Ana',
    edad: 49,
  },
  {
    id: 3,
    nombre: 'Pedro',
    edad: 34,
  },
]

function getDatos() {
  return datos
}

// console.log(getDatos());

function getDatosSinc() {
  setTimeout(getDatos, 3000)
}
// console.log(getDatosSinc())

function getDatosProm() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getDatos())
    }, 4000)
  })
}

getDatosProm()
  .then(datos => console.log(datos))
  .catch(err => console.log(err))

async function asyawt() {
  try {
    const misDatos = await getDatosProm()
    log(misDatos)
  } catch (error) {
    console.log(error.message)
  }
}
asyawt()
