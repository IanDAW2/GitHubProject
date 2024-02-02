window.addEventListener('load', () => {
  document.getElementById('btn').addEventListener('click', () => {
    // Ejemplo 1
    setTimeout(function () {
      console.log('Ejecuto la función del ejemplo 1 7seg')
    }, 7000)

    // Ejemplo 2
    setTimeout(() => console.log('esta parte es asincrona 5seg'), 4000)
    console.log('esta parte es sincrona')

    // Ejemplo 3
    let miPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('Promesa ejecutada en 3 segundos'))
      }, 3000)
    })

    // Ejemplo 4
    let realizado = true
    const tareaRealizada = new Promise((resolve, reject) => {
      if (realizado) {
        const trabajoCompletado = 'La tarea se ha completado'
        resolve(trabajoCompletado)
        console.log(trabajoCompletado)
      } else {
        const trabajoFallido = 'La tarea ha fallado'
        reject(trabajoFallido)
        console.log(trabajoFallido)
      }
    })

    // Ejemplo 5
    const miPromesa2 = new Promise((resolve, reject) => {
      const numero = Math.floor(Math.random() * 10)
      setTimeout(() => {
        numero > 5 ? resolve(numero) : reject(new Error('Se ha obtenido un número menor a 5'))
      }, 3000)
    })
    miPromesa2.then(numero => console.log(numero)).catch(error => console.log(error.message))
  })
})


