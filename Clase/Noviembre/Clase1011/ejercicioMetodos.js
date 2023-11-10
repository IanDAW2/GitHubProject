const animales = ["perro", "gato", "tortuga", "mono", "pato"]

console.log(Object.keys(animales))
console.log(Object.values(animales))
console.log(Object.entries(animales))

const entradas = Object.entries(animales)
console.log(Object.fromEntries(entradas))

const keys = ["name", "life", "power", "talk"]
const values = [
  "Otto",
  99,
  10,
  () => {
    return "hola"
  },
]

const entries = []

for (const i of Object.keys(keys)) {
  const key = keys[i]
  const value = values[i]
  entries.push([key, value])
}

const user = Object.fromEntries(entries)
