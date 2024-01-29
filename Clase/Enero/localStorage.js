if (typeof Storage !== 'undefined') {

  alert('Si hay soporte para localStorage/sessionStorage')

  if (localStorage.getItem('nombre') !== null) {
    document.getElementById('saludo').innerHTML = `Bienvenido de nuevo ${localStorage.getItem(
      'nombre'
    )}!✌`
  } else {
    localStorage.setItem('nombre', prompt('Ingresa tu nombre')?? 'Anónimo')
    document.getElementById('saludo').innerHTML = `Encantado ${localStorage.getItem('nombre')}!🙌`
  }

  if (!sessionStorage.getItem('contador')) {
    sessionStorage.setItem('contador', 0)
  }

  // Mostrar contador con intervalo de 0,1 segundo
  setInterval(() => {
    document.getElementById('contador').innerHTML = `Contador: ${sessionStorage.getItem(
      'contador'
    )}`
  }, 10)

  // Incrementar contador
  document.getElementById('incrementar').addEventListener('click', () => {
    sessionStorage.setItem('contador', parseInt(sessionStorage.getItem('contador')) + 1)
  })

  // Decrementar contador
  document.getElementById('decrementar').addEventListener('click', () => {
    sessionStorage.setItem('contador', parseInt(sessionStorage.getItem('contador')) - 1)
  })

  // Log out
  document.getElementById('logout').addEventListener('click', () => {
    alert('Cerrando sesión de ' + localStorage.getItem('nombre'))
    sessionStorage.removeItem('contador')
    localStorage.removeItem('nombre')
    location.reload()
  })
} else {
}
