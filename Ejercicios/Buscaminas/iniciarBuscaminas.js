window.addEventListener('load', () => {
  /*--------------------------------------------------------------*/

  // Añadimos los eventos a los botones de dificultad
  const botonFacil = document.getElementById('nFacil')
  botonFacil.addEventListener('click', generarTableroJS)

  const botonIntermedio = document.getElementById('nIntermedio')
  botonIntermedio.addEventListener('click', generarTableroJS)

  const botonDificil = document.getElementById('nDificil')
  botonDificil.addEventListener('click', generarTableroJS)

  /*--------------------------------------------------------------*/

  // Variables y constantes globales para el juego
  const contador = document.getElementById('contadorBombas')
  const imgBomba = `background-image: url('assets/mine.svg'); background-size: cover;`
  const imgBandera = `background-image: url('assets/flag.svg'); background-size: cover;`
  var estado = 'Jugando' || 'Perdido' || 'Ganado'
  var contadorBombas = 0
  var matriz
  const infoCasilla = {
    bomba: false,
    descubierta: false,
    bandera: false,
    numero: 0,
  }

  /*--------------------------------------------------------------*/

  // Primera funcion para generar el tablero
  function generarTableroJS(event) {
    switch (event.target) {
      case botonFacil: // En el modo facil tendremos una tabla de 8x8
        dibujarTableroHTML(8, 8)
        colocarBombasTableroJS(10)
        break
      case botonIntermedio: // En el modo intermedio tendremos una tabla de 16x16
        dibujarTableroHTML(16, 16)
        colocarBombasTableroJS(40)
        break
      case botonDificil: // En el modo dificil tendremos una tabla de 30x16
        dibujarTableroHTML(30, 16)
        colocarBombasTableroJS(99)
        break
    }
    estado = 'Jugando'
  }

  /*--------------------------------------------------------------*/

  // Funcion para generar un numero aleatorio
  function numeroAleatorio(maximo) {
    return Math.floor(Math.random() * maximo)
  }

  /*--------------------------------------------------------------*/

  // Funcion para colocar las bombas en el tablero
  function colocarBombasTableroJS(numBombas) {
    for (let index = 0; index < numBombas; index++) {
      num1 = numeroAleatorio(matriz.length)
      num2 = numeroAleatorio(matriz[0].length)
      if (matriz[num1][num2]['bomba'] === true) {
        index--
      } else {
        matriz[num1][num2]['bomba'] = true // Colocamos la bomba en la casilla
        sumarBombaAlrededor([num1, num2]) // Sumamos 1 a las casillas alrededor de la bomba
      }
    }
    contadorBombas = numBombas
    contador.textContent = `Bombas restantes: ${contadorBombas}`
  }

  /*--------------------------------------------------------------*/

  // Funcion para dibujar el tablero en HTML
  function dibujarTableroHTML(numBTCol, numBTFil) {
    // Comprobamos si ya existe una tabla para eliminarla
    if (document.querySelector('#tabla')) {
      document.querySelector('#tabla').remove()
    }

    // Creamos la tabla aplicando los estilos necesarios
    const tabla = document.createElement('div')
    tabla.classList.add('tabla')
    tabla.id = 'tabla'
    tabla.style.cssText += `grid-template-rows: repeat(${numBTFil}, 1fr);
  grid-template-columns: repeat(${numBTCol}, 1fr);`

    document.querySelector('main').append(tabla)

    // Creamos la matriz y los botones
    matriz = []
    for (let indexFil = 0; indexFil < numBTFil; indexFil++) {
      matriz.push([])
      for (let indexCol = 0; indexCol < numBTCol; indexCol++) {
        matriz[indexFil].push({ ...infoCasilla })

        tBoton = document.createElement('button')
        tBoton.addEventListener('click', descubrir) // Añadir evento para descubrir casilla
        tBoton.addEventListener('contextmenu', bandera) // Evitar el menú contextual
        tBoton.id = `${indexFil}-${indexCol}`
        tabla.append(tBoton)
      }
    }
  }

  /*--------------------------------------------------------------*/

  // Funcion para sumar 1 a las casillas alrededor de la bomba
  function sumarBombaAlrededor(casilla) {
    for (let fila = -1; fila <= 1; fila++) {
      for (let colum = -1; colum <= 1; colum++) {
        if (casilla[0] + fila < 0 || casilla[0] + fila >= matriz.length) continue // Si la casilla está fuera de la matriz
        if (casilla[1] + colum < 0 || casilla[1] + colum >= matriz[0].length) continue // Si la casilla está fuera de la matriz
        if (matriz[casilla[0] + fila][casilla[1] + colum]['bomba'] === true) continue // Si la casilla es una bomba no sumamos nada para que quede en null
        matriz[casilla[0] + fila][casilla[1] + colum]['numero']++
      }
    }
    matriz[casilla[0]][casilla[1]]['numero'] = null // La casilla con la bomba no tendrá número
  }

  /*--------------------------------------------------------------*/

  function descubrir(e) {
    // Comprobar si el juego ha terminado
    if (estado === 'Perdido' || estado === 'Ganado') return

    // Obtener el ID del botón que fue clickeado
    const id = e.target.id
    const [fila, columna] = id.split('-').map(Number)
    if (matriz[fila][columna]['bandera'] === true) return

    /*--------------------------------------------------------------*/
    // Comprobar si la casilla contiene una bomba
    if (matriz[fila][columna]['bomba'] === true) {
      // Terminar el juego
      const overlay = document.createElement('div')
      overlay.classList.add('overlay')
      document.body.appendChild(overlay)

      estado = 'Perdido'
      let maxTimeout = 0
      for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
          if (matriz[i][j]['bomba'] === true && matriz[i][j]['bandera'] === false) {
            // Si la casilla tiene una bomba y no tiene bandera se muestra como bomba
            let timeout = 100 * (i + j)
            setTimeout(
              () => (document.getElementById(`${i}-${j}`).style.cssText += imgBomba),
              timeout
            ) // Mostrar las bombas
            maxTimeout = timeout
          }
        }
      }

      // Mostrar mensaje de que ha perdido
      setTimeout(() => {
        Swal.fire({
          title: '¡Has perdido!',
          text: '¿Quieres volver a jugar?',
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí',
          cancelButtonText: 'No',
        }).then(result => {
          if (result.isConfirmed) {
            location.reload()
          }
        })
        document.body.removeChild(overlay)
      }, maxTimeout + 500)

      return

      /*--------------------------------------------------------------*/
    } else {
      // Mostrar el número de bombas en las casillas cercanas
      e.target.textContent = matriz[fila][columna]['numero'] ?? ''

      // Si no hay bombas cerca, descubrir las casillas cercanas
      if (matriz[fila][columna]['numero'] === 0) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (
              fila + i >= 0 &&
              fila + i < matriz.length &&
              columna + j >= 0 &&
              columna + j < matriz[0].length
            ) {
              const casillaAdyacente = document.getElementById(`${fila + i}-${columna + j}`)
              if (casillaAdyacente && !casillaAdyacente.textContent) {
                // Si la casilla no ha sido descubierta aún y no tiene bandera la descubrimos
                casillaAdyacente.click()
              }
            }
          }
        }
      }
    }

    // Marcar la casilla como descubierta
    matriz[fila][columna]['descubierta'] = true
  }

  /*--------------------------------------------------------------*/

  // Funcion para colocar las banderas en el tablero
  function bandera(e) {
    // Añadir evento para colocar bandera
    e.preventDefault()
    const id = e.target.id
    const [fila, columna] = id.split('-').map(Number)
    if (estado === 'Perdido' || estado === 'Ganado') return // Si el juego ha terminado no se pueden poner banderas
    if (matriz[fila][columna]['descubierta'] === true) return // Si la casilla ya ha sido descubierta no se puede poner bandera

    if (matriz[fila][columna]['bandera'] === false) {
      // Si no hay bandera en la casilla se coloca una
      e.target.style.cssText += imgBandera
      matriz[fila][columna]['bandera'] = true
      contadorBombas--
    } else {
      // Si se aprieta el boton derecho sobre una casilla con bandera se quita la bandera
      e.target.style.cssText = ''
      matriz[fila][columna]['bandera'] = false
      contadorBombas++
    }
    contador.textContent = `Bombas restantes: ${contadorBombas}`
    if (contadorBombas === 0) {
      // Si no quedan bombas por marcar se comprueba si el jugador ha ganado
      comprobarGanador()
    }
  }

  /*--------------------------------------------------------------*/

  // Funcion para comprobar si el jugador ha ganado
  function comprobarGanador() {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[0].length; j++) {
        // Si hay una bomba sin bandera el juego no ha terminado
        if (matriz[i][j]['bomba'] === true && matriz[i][j]['bandera'] === false) {
          return
        }
      }
    }
    estado = 'Ganado'

    // Mostrar mensaje de que ha ganado
    Swal.fire({
      title: '¡Has ganado!',
      text: '¿Quieres volver a jugar?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then(result => {
      if (result.isConfirmed) {
        location.reload()
      }
    })
  }
})
