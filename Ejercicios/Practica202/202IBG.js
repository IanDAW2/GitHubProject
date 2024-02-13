window.addEventListener('load', () => {
  document.querySelector('#mensaje').addEventListener('input', actualizarContador)
  document.querySelector('#seleccionarTodos').addEventListener('click', seleccionarTodos)
  document.querySelector('#cursoAcademico').addEventListener('change', nuevoCursoAcademico)
  document.querySelector('#irGoogle').addEventListener('click', () => {
    window.location.href = 'https://www.google.es'
  })
  const form = document.querySelector('form')

  function seleccionarTodos() {
    const diasDisponibles = document.querySelectorAll('input[name=diasDisponibles]')
    diasDisponibles.forEach(dia => {
      dia.checked = true
    })
  }

  function actualizarContador(e) {
    const contador = document.querySelector('.contador')
    const caracteresRestantes = 500 - e.target.value.length
    contador.textContent = `${caracteresRestantes} caracteres restantes`
  }

  function nuevoCursoAcademico(e) {
    // Añadir el nuevo curso al select antes de la opción de nuevo y con el nuevo curso seleccionado
    if (e.target.value === 'nuevo') {
      const nuevoCurso = document.createElement('option')
      const nombre = prompt('Introduce el nuevo curso académico')
      nuevoCurso.value = nombre
      nuevoCurso.textContent = nombre
      nuevoCurso.selected = true
      e.target.insertBefore(nuevoCurso, e.target.querySelector('option[value=nuevo]'))
    }
  }

  // Función para validar el NIF
  function validarNIF() {
    const nif = document.querySelector('#nif').value
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET'
    const letra = nif.charAt(nif.length - 1).toUpperCase()
    const numero = nif.substring(0, nif.length - 1)
    return letra === letras[numero % 23]
  }

  // Función para validar el mensaje
  function validarMensaje() {
    const mensaje = document.querySelector('#mensaje').value
    return mensaje.length >= 2 && mensaje.length <= 500
  }

  // Función para validar minimo de dias seleccionados
  function validarMinDias() {
    const dias = []
    form.querySelectorAll('input[name=diasDisponibles]').forEach(dia => {
      if (dia.checked) {
        dias.push(dia.value)
      }
    })

    return dias.length >= 2
  }

  // Función para validar que al menos un color esté seleccionado
  function validarColor() {
    const coloresSeleccionados = form.querySelector('input[name=color]:checked')
    return coloresSeleccionados !== null
  }

  // Función para validar que no haya campos vacíos
  function camposVacios() {
    let camposVacios = false
    form.querySelectorAll('input').forEach(input => {
      if (!input.checkValidity()) {
        let p = document.createElement('p')
        p.textContent = 'Campo vacío'
        p.className = 'error'
        input.parentNode.appendChild(p)
        camposVacios = true
      }
    })
    return !camposVacios
  }

  // Función para validar el formulario
  function validarFormulario() {
    form.querySelectorAll('.error').forEach(error => error.remove())
    form.querySelectorAll('p').forEach(p => p.remove())

    const validaciones = [
      validarColor(),
      validarMensaje(),
      validarNIF(),
      validarMinDias(),
      camposVacios(),
    ]

    if (validaciones.every(validacion => validacion === true)) {
      return true // El formulario es válido si todos los metodos devuelven true
    }
    return false
  }

  // Añadir evento al botón de enviar
  form.addEventListener('submit', event => {
    event.preventDefault()

    if (validarFormulario()) {
      // Enviar el formulario
      alert('Formulario enviado correctamente')
    }
  })
})
