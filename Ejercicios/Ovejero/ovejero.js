const frase = 'Nadie salio a (emridepsed) cuando me (iuf) de la estancia, (etnemalos) el ovejero...'

const listaFrase = frase.split(' ')
var fraseFinal = ''

listaFrase.forEach(palabra => {
  if (palabra.startsWith('(') && palabra.endsWith(')')) {
    palabra = palabra.replace(')', '')
    palabra = palabra.replace('(', '')
    palabra = [...palabra].reverse().join('')
  }
  fraseFinal += palabra + ' '
})

console.log(fraseFinal)
