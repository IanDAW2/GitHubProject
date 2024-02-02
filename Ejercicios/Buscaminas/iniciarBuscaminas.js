const tabla = document.getElementById('tabla')

const botonFacil = document.getElementById('nFacil')
botonFacil.addEventListener('click', generarTableroJS)

const botonIntermedio = document.getElementById('nIntermedio')
botonIntermedio.addEventListener('click', generarTableroJS)

const botonDificil = document.getElementById('nDificil')
botonDificil.addEventListener('click', generarTableroJS)

var matriz = []

function generarTableroJS(event) {
  switch (event.target) {
    case botonFacil: // En el modo facil tendremos una tabla de 8x8
      matriz = []
      for (let index = 0; index < 8; index++) matriz.push({ index: {} })
      dibujarTableroHTML(8, 8)
      console.log(matriz)
      break
    case botonIntermedio: // En el modo intermedio tendremos una tabla de 16x16
    //   tabla.style.cssText += `grid-template-rows: repeat(16, 1fr);
    // grid-template-columns: repeat(16, 1fr);`
      matriz = []
      for (let index = 0; index < 16; index++) matriz.push({ index: {} })
      dibujarTableroHTML(16, 16)
      console.log(matriz)
      break
    case botonDificil: // En el modo dificil tendremos una tabla de 30x16
    //   tabla.style.cssText += `grid-template-columns: repeat(30, 1fr);
    // grid-template-rows: repeat(16, 1fr);`
      matriz = []
      for (let index = 0; index < 16; index++) matriz.push({ index: {} })
      dibujarTableroHTML(30, 16)
      console.log(matriz)
      break
  }
}

function numeroAleatorio() {
  return Math.floor(Math.random * 15)
}

function colocarBombasTableroJS(numBombas) {
  // Colocamos las bombas en el tablero
  Array.from(tabla.querySelectorAll('button')).forEach(bt => {
    if (numeroAleatorio() === 1) {
      // Tiene una probabilidad de 15% de que sea bomba
      bt.style.cssText += `background-image: url('assets/mine-50.png');
      background-size: cover;`
      bt.id = 1
      if (--numBombas == 0) return // Si se acaban el numero de bombas totales por dificultad el resto no tienen
    }
  })
}

function dibujarTableroHTML(numBTCol, numBTFil) {
  // Colocamos los botones en el tablero
  tabla.remove()
  document.body.append(tabla)
  // if (tabla.children.length > 0) tabla.remove(tabla.children)

  tabla.style.cssText += `grid-template-rows: repeat(${numBTFil}, 1fr);
  grid-template-columns: repeat(${numBTCol}, 1fr);`

  for (let indexFil = 0; indexFil < numBTFil; indexFil++) {
    for (let indexCol = 0; indexCol < numBTCol; indexCol++) {
      tBoton = document.createElement('button')
      tBoton.id = `${indexFil}-${indexCol}`
      tabla.append(tBoton)
    }
  }
}
