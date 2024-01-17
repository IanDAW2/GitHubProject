const tabla = document.getElementById('tabla')

const botonFacil = document.getElementById('nFacil')
botonFacil.addEventListener('click', generarTableroJS)

const botonIntermedio = document.getElementById('nIntermedio')
botonIntermedio.addEventListener('click', generarTableroJS)

const botonDificil = document.getElementById('nDificil')
botonDificil.addEventListener('click', generarTableroJS)

const matriz = []

function generarTableroJS(event) {
  switch (event.target) {
    case botonFacil: // En el modo facil tendremos una tabla de 8x8
      tabla.style.cssText += `grid-template-rows: repeat(8, 1fr);
      grid-template-columns: repeat(8, 1fr);`
      for (let index = 0; index < 8; index++) matriz.push([])
      dibujarTableroHTML(8 * 8)
      break
    case botonIntermedio: // En el modo intermedio tendremos una tabla de 16x16
      tabla.style.cssText += `grid-template-rows: repeat(16, 1fr);
    grid-template-columns: repeat(16, 1fr);`
      for (let index = 0; index < 16; index++) matriz.push([])
      dibujarTableroHTML(16 * 16)
      break
    case botonDificil: // En el modo dificil tendremos una tabla de 30x16
      tabla.style.cssText += `grid-template-columns: repeat(30, 1fr);
    grid-template-rows: repeat(16, 1fr);`
      for (let index = 0; index < 16; index++) matriz.push([])
      dibujarTableroHTML(30 * 16)
      break
  }
}

function numeroAleatorio() {
  // proximamente
}

function colocarBombasTableroJS(numBombas) {
  // proximamente
  Array.from(tabla.querySelectorAll('button')).forEach(bt => {
    if (Math.floor(Math.random * 15) === 1) {
      // Tiene una probabilidad de 15% de que sea bomba
      bt.style.cssText += `background-image: url('assets/mine-50.png');
      background-size: cover;`
      bt.id = 1
      if (--numBombas == 0) return // Si se acaban el numero de bombas totales por dificultad el resto no tienen
    }
  })
}

function dibujarTableroHTML(numBT) {
  for (let index = 0; index < numBT; index++) {
    tBoton = document.createElement('button')
    tabla.append(tBoton)
  }
}
