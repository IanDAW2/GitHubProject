const div = document.getElementById('mensajes')
const btn = document.getElementById('promesa')
var contGlobal = 0

btn.addEventListener('click', probarPromesa)

function probarPromesa() {
  const cont = ++contGlobal
  div.insertAdjacentHTML('beforeend', cont + ') Empieza el código sincrono <br/>')
  new Promise((resolve, reject) => {
    div.insertAdjacentHTML(
      'beforeend',
      cont + ') Dentro de la promesa, antes del timeout. Empieza el código asíncrono <br/>'
    )
    setTimeout(() => {
      resolve(cont)
    }, Math.random() * 4000 + 1000)
  }).then(thiscont => {
    div.insertAdjacentHTML(
      'beforeend',
      thiscont + ') Dentro el .then. Código asincrono terminado <br/>'
    )
  })
  div.insertAdjacentHTML(
    'beforeend',
    cont + ') Código despues del .then. Código síncrono terminado <br/>'
  )
}
