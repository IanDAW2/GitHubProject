window.onload = iniciar

function iniciar() {
  document.getElementById('enviar').addEventListener('click', validar, false)
}

function validarNombre() {
  const elemento = document.getElementById('nombre')
  if (!elemento.checkValidity()) {
    // error(elemento)

    if (elemento.validity.valueMissing) {
      error2(elemento, 'no puedes dejar este campo vacio')
    }
    if (elemento.validity.patternMismatch) {
      error2(elemento, 'debe contener entre 2 y 15 caracteres')
    }
    return false
  }
  return true
}

function validarEdad() {
  const elemento = document.getElementById('edad')
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error2(elemento, 'no puedes dejar este campo vacio')
    }
    if (elemento.validity.rangeOverflow) {
      error2(elemento, 'debe ser menor o igual a 120')
    }
    if (elemento.validity.rangeUnderflow) {
      error2(elemento, 'debe ser mayor o igual a 18')
    }
    return false
  }
  return true
}

function validarTelefono() {
  const elemento = document.getElementById('telefono')
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error2(elemento, 'no puedes dejar este campo vacio')
    }
    if (elemento.validity.patternMismatch) {
      error2(elemento, 'debe contener 9 numeros')
    }
    return false
  }
  return true
}

function validar(e) {
  limpiarError()
  if (validarNombre() && validarEdad() && validarTelefono() && confirm('¿Estas seguro?')) {
    return true
  } else {
    e.preventDefault()
  }
  return false
}

// function error(elemento) {
//   document.getElementById('mensajeError').innerHTML = elemento.validationMessage
//   elemento.classList.add('error')
//   elemento.focus()
// }

function limpiarError() {
  const form = document.querySelector('form')
  Array.from(form.elements).forEach(element => {
    element.classList.remove('error')
  })
}

function error2(elemento, mssg) {
  document.getElementById('mensajeError').innerHTML = mssg
  elemento.classList.add('error')
  elemento.focus()
}
