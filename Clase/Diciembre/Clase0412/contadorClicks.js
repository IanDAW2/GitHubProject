const boton = document.getElementById('contador')
// const menosBoton = document.getElementById('restarContador')
const parrafo = document.getElementById('clicks')
var contador = 0

boton.addEventListener('click', contadorSumaResta)
boton.addEventListener('contextmenu', contadorSumaResta)

function contadorSumaResta(e) {
  e.preventDefault()
  switch (e.type) {
    case 'click':
      contador++
      parrafo.textContent = contador
      break
    case 'contextmenu':
      contador--
      parrafo.textContent = contador
      break
  }
}
