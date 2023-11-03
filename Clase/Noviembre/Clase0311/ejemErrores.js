try {
  console.log("Inicio de sentencias de try")
  hola_caracola
  console.log("Fin de sentencias de try (Si/ )")
} catch (err) {
  console.log(`¡Un error ha ocurrido!`)
  console.log(err.name)
  console.log(err.message)
  console.log(err.stack)
}

function retirar(saldo, cantidad) {
  if (saldo < cantidad) {
    return false
  }
  return saldo - cantidad
}
resultado = retirar(saldo, cantidad)
if (resultado === false) console.log(`Saldo insufiente‼`)
else console.log(saldo = resultado);
