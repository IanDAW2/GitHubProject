const boton = document.getElementById('contador')
// const menosBoton = document.getElementById('restarContador')
const parrafo = document.getElementById('clicks')
var contador = 0

boton.addEventListener('click', contadorSumaResta)
boton.addEventListener('auxclick', contadorSumaResta)
document.oncontextmenu = () => false

function contadorSumaResta(e) {
  switch (e.type) {
    case 'click':
      contador++
      parrafo.textContent = contador
      break
    case 'auxclick':
      contador--
      parrafo.textContent = contador
      break
  }
}
