// Obtener los dias que han pasado entre hoy y otra fecha fija (7 mayo 1950)

const fechaFija = new Date("1990-05-07")
const fechaHoy = new Date()

const diferencia = fechaHoy.getTime() - fechaFija.getTime()

const anios = diferencia / 1000 / 60 / 60 / 24 / 365
const meses = (anios % 1) * 12
const dias = (meses % 1) * 30
const horas = (dias % 1) * 24
const min = (horas % 1) * 60
const seg = (min % 1) * 60

const dif = [
  {
    años: Math.floor(anios),
    meses: Math.floor(meses),
    dias: Math.floor(dias),
  },
  {
    horas: Math.floor(horas),
    minutos: Math.floor(min),
    segundos: Math.floor(seg),
  },
]

dif.forEach((element) => {
  console.log(element)
})
