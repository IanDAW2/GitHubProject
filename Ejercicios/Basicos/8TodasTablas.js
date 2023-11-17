// 8.  Todas las tablas

for (let multiplicando = 0; multiplicando <= 10; multiplicando++) {
  console.log(`----Tabla del ${multiplicando}----`)
  for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
    console.log(
      `${multiplicador} x ${multiplicando} = ${multiplicador * multiplicando}`
    )
  }
}
