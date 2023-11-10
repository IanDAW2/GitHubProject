/**
 * * Crea un objeto llamado tvSamsung con las propiedades nombre (TV Samsung 42”), categoría (Televisores),
 * * unidades (4), precio (345.95) y con un método llamado importe
 * * que devuelve el valor total de las unidades (nº de unidades * precio)
 */

const tvSamsung = {
  nombre: 'TV Samsung 42"',
  categoria: "Televisores",
  unidades: 4,
  precio: 345.95,
  importe: () => {
    return this.unidades * this.precio
  },
}

/**
 * * Crea un objeto Productos con las propiedades y métodos del ejercicio anterior.
 * * Además tendrá un método getInfo que devolverá:
 * * ‘Nombre (categoría): unidades uds x precio € = importe €’. Crea 3 productos diferentes.
 */

function Productos(nom, cat, ud, pre) {
  this.nombre = nom
  this.categoria = cat
  this.unidades = ud
  this.precio = pre

  this.importe = () => {
    return this.unidades * this.precio //.toFixed(2)
  }

  this.getInfo = () => {
    return `${this.nombre}(${this.categoria}): ${this.unidades}uds x ${
      this.precio
    }€ = ${this.importe()}`
  }

  this.toString = () =>
    `Producto: ${this.nombre}(${this.categoria})
          Unidades: ${this.unidades}
          Precio: ${this.precio}
          Importe: ${this.importe()}`

  this.valueOf = () => this.importe()
}

const producto1 = new Productos("tvSamsung", "Televisores", 10, 399.99)
const producto2 = new Productos("Secret Lab Titan", "Silla Gaming", 3, 629)
const producto3 = new Productos("Logitech G305", "Ratones", 50, 72.99)

console.log(producto1.getInfo())
console.log(producto2.getInfo())

/**
 * * Crea un Objeto Televisores que hereda de Productos y que tiene una nueva propiedad llamada tamaño.
 * * El método getInfo mostrará el tamaño junto al nombre
 */

function Televisores(nom, cat, ud, pre, tam) {
  Productos.call(this, nom, cat, ud, pre)

  this.tamano = tam

  this.getInfo = () => {
    return `${this.nombre} ${this.tamaño}\"(${this.categoria}): ${
      this.unidades
    }uds x ${this.precio}€ = ${this.importe()}`
  }

  this.toString = () =>
    `Nombre: ${this.nombre} ${this.tamano}\"(${this.categoria})
          Unidades: ${this.unidades}
          Precio: ${this.precio}
          Importe: ${this.importe()} (${this.typeOf()})`

  this.valueOf = () => this.tamano
}

const television = new Televisores("LG", "Television", 12, 149.98, 48)

/**
 * * Modifica los Objetos Productos y Televisores, para que contenga la función ”toString”.
 * * Esta función debe devolver una cadena de texto (La que consideres oportuna).
 */

console.log(producto3.toString())

console.log(television.toString())

/**
 * * Modifica los Objetos Productos y Televisores, para que contenga la función ”valueOf”.
 * * Esta función debe devolver un valor numérico(El que consideres oportuno).
 */

console.log("valueOf Importe:" + producto3.valueOf())

console.log("valueOf Tamaño:" + television.valueOf())

/**
 * * Crea 5 productos y guárdalos en un array.
 * * Crea las siguientes funciones (todas reciben ese array como parámetro):
 * * • prodOrdenPorNombre() Devuelve un array con los productos ordenados alfabéticamente
 * * • prodOrdenPorPrecio() devuelve un array con los productos ordenados por importe
 * * • prodPrecioTotal() Devuelve el importe total del los productos del array, con 2 decimales
 * * • prodConMenosUnidades() Además del array recibe como segundo parámetro un número y devuelve un array con todos los productos que tienen menos unidades que las indicadas
 * * • prodLista() Devuelve una cadena que dice ‘Listado de productos:’ y en cada línea un guión y la información de un producto del array
 */
const produntoArray1 = new Productos("Camiseta", "Ropa", 10, 15.99)
const productoArray2 = new Productos("Zapatos", "Calzado", 5, 49.99)
const productoArray3 = new Productos("Portátil", "Electrónica", 2, 799.99)
const productoArray4 = new Productos("Libro", "Libros", 20, 12.5)
const productoArray5 = new Productos("Frutas", "Alimentos", 30, 2.99)

const listaProductos = [
  produntoArray1,
  productoArray2,
  productoArray3,
  productoArray4,
  productoArray5,
]

function prodOrdenPorNombre(lista) {
  return lista.sort(function (a, b) {
    return a.nombre.localeCompare(b.nombre)
  })
}

function prodOrdenPorPrecio(lista) {
  return lista.sort(function (a, b) {
    return a.precio - b.precio
  })
}

function prodPrecioTotal(lista) {
  let precioTotal = lista.reduce(
    (acumulador, valor) => acumulador + valor.importe()
  )
  return precioTotal.toFixed(2)
}

function prodConMenosUnidades(lista, cantidad) {
  const menosUnidades = []
  lista.forEach((element) => {
    if (element.unidades <= cantidad) {
      menosUnidades.push(element)
    }
  })
  return menosUnidades
}

function prodLista(lista) {
  var listado = "Listado de productos:"
  lista.forEach((element) => {
    listado += "\n- " + element.toString()
  })
  return listado
}

console.log(prodOrdenPorNombre(listaProductos))
console.log(prodOrdenPorPrecio(listaProductos))
console.log(prodPrecioTotal(listaProductos))
console.log(prodConMenosUnidades(listaProductos, 10))
console.log(prodLista(listaProductos))
