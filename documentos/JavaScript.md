# INDICE

- [INDICE](#indice)
- [Introduccion](#introduccion)
  - [Inicio JavaScript](#inicio-javascript)
  - [Reglas Basicas](#reglas-basicas)
- [Variables](#variables)
  - [Declaracion](#declaracion)
    - [**Ejemplo de uso**](#ejemplo-de-uso)
  - [Constantes](#constantes)
  - [Operadores fijos](#operadores-fijos)
  - [Hoisting](#hoisting)
  - [Operadores](#operadores)
  - [Casting](#casting)
  - [Metodos](#metodos)
  - [Fechas](#fechas)
    - [Funciones de tiempo](#funciones-de-tiempo)
- [Funciones](#funciones)
- [Estructuras de control](#estructuras-de-control)
  - [**if**](#if)
  - [**elseif**](#elseif)
  - [**switch**](#switch)
  - [**for**](#for)
  - [**while**](#while)
  - [**do while**](#do-while)
  - [Arrays (Vectores)](#arrays-vectores)
    - [Metodos](#metodos-1)
  - [Desestructuración](#desestructuración)
  - [Sets(conjuntos)](#setsconjuntos)
    - [Metodos Set](#metodos-set)
  - [Maps](#maps)
- [Errores](#errores)
  - [Metodos](#metodos-2)
  - [Manejo](#manejo)
- [Objetos nativos](#objetos-nativos)
  - [Objetos String](#objetos-string)
  - [Objetos Number](#objetos-number)
  - [Constructores](#constructores)
    - [Crear metodos](#crear-metodos)
  - [JSON](#json)
    - [Metodos](#metodos-3)
  - [Clases](#clases)
  - [Desestructuración de Objetos](#desestructuración-de-objetos)
    - [Metodos](#metodos-4)
- [Objetos del navegador](#objetos-del-navegador)
  - [Window](#window)
    - [Metodos](#metodos-5)
  - [History](#history)
    - [Propiedad](#propiedad)
    - [Metodos](#metodos-6)
  - [Location](#location)
  - [Eventos](#eventos)
    - [Ejemplo](#ejemplo)
    - [Modelo Tradicional](#modelo-tradicional)
    - [Modelo W3C](#modelo-w3c)
- [Programación funcional](#programación-funcional)
- [Objetos definidos por el usuario](#objetos-definidos-por-el-usuario)

# Introduccion

HTML (esqueleto), CSS (estilo, diseño) y JavaScript (fragmentos de codigo). Regulado por ECMAº

---

## Inicio JavaScript

Lenguaje de programacion del lado del cliente: se ejecuta en el navegador del cliente(_salvo excepciones..._), **NO** en el servidor.

---

- Interpretado
- Orientado a objetos
- Basado en objetos con funciones
- Imperativo
- Estructurado
- Tipicacion debil
- Tipicacion dinamica
- Tecnica **_Compilacion Just In Time_** que consiste en compilar fragmento de codigo durante la ejecucion
- No se suele utilizar para hacer calculos

---

**Ejemplo de JavaScript incrustado en HTML**

```JS
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Primera practica</title>
    <!-- Creacion de Funcion de JS -->
    <script>
      function hola() {
        alert("Hola   ");
      }
      hola();
    </script>
  </head>
  <body>
    <h1>Este es el primer HTML con JS incrustado</h1>
    <!-- Para utilizar las funciones primero necesitamos la etiqueta de HTML "<script>" -->
    <script>
      hola();
    </script>
    <h1>Este es la segunda cabezera</h1>
    <script>
      hola();
    </script>
  </body>
</html>
```

---

## Reglas Basicas

- Se pueden agrupar varias instrucciones en la misma linea separandolas con ";".
- ";" No es obligatorio para los finales de linea.
- Los decimales con ".".
- var o let declaran las variables. No es imprescindible.
- Operador de asignacion "=". En versiones posteriores "\*\*", "++" y "--".
- Los bloques de codigo se delimitan con {}.
- Recomendado camelCase para definicion de variables.

---

# Variables

Espacio de memoria a la que se le asigna un nombre y guarda un valor.
Valores de tipo Object o ...

---

## Declaracion

Se declaran con var asignandole o no un valor

```JS
var nombre
var nombre= "Juan"; //Se decalara y SE ASIGNA valor
nombre = 'Pepe';
var nombre = "Juan", apellido='Garcia', apellido2="Lopez";
var nombreApellido = "Juan"+ "" + "Garcia";
var nombreApellido = nombre + "" + apellido;
var edad = nacimiento = 13; //no completo
```

La version de ES6 incluyo el uso de let. Permite declarar una variable limitando su alcance al bloque donde se este usando.

---

### **Ejemplo de uso**

```HTML
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplos variables</title>
    <script>
      var primeraVariable = "Declarada fuera del bloque";
      function miFuncion() {
        var primeraVariable =
          "Declarada dentro de la funcion con el mismo nombre";
        console.log(primeraVariable);
        return 0; //Se llama igual pero solo existe dentro de la funcion
      }
      console.log(primeraVariable);
    </script>
  </head>
  <body>
    <script>
      {
        var primeraVariable = "Visible fuera del bloque";
        let segundaVariable = "No visible fuera del bloque";
      }
      console.log(primeraVariable);
      console.log(segundaVariable);
      miFuncion();
    </script>
  </body>
</html>
```

---

## Constantes

Son variables inicializadas a un valor especifico y que no pueden redeclararse.

```JS
  const nombre = 'Cristina' // A lo largo de la ejecucion no va a variar su valor
  let texto = 'Hello world!'
  var cantidad = 'Palabra'
```

---

**Use strict**

Obliga a declarar las variables

- Sin _use strict_ se utiliza Javascript en modo "poco riguroso", o "sloppy mode"
- No todos los navegadores lo permiten
- Al poner esta sentencia al principio del codigo el interprete avisara si se usa una varibale sin declarar

---

## Operadores fijos

Sirven para conocer de que tipo es una variable o un dato; y si un objeto es instancia de otro, respectivamente.

- **Typeof** devuelve una cadena que indica el tipo de operando que hay despues sin evaluarlo
- **Instaceof** verfica si un objeto se corresponde con el tipo de dato indicado a continuacion

---

## Hoisting

Es un mecanismo que consiste en que el interprete de JavaScript escanea el programa antes de ejecutarlo, buscando errores en su sintaxis

---

## Operadores

```JS
  let x = 1
  let y = ++x // Primero suma y luego asigna
  let z = y++ + x // Asigna y luego suma
  x == y // Comparacion sin tener en cuenta el tipo
  x === y // Comparacion teniendo en cuenta el tipo
  x = y // Asignacion
  x += y // Suma y asigna
  x -= y // Resta y asigna

  const port = process.env.PORT || 5000 // Asignacion por defecto ||

  (Condicion) ? Resultado_cierto : Resultado_falso // Operador ternario
  let votante = (edad >18)? "Puede votar":"No puede votar" // Ejemplo Operador ternario

  let year = 2050
  let newYear = year = 2051; // Se ejecuta de derecha a izquierda
  // Es lo mismo que:
  let year = 2050
  year = 2051
  let newYear = year

  // Funciones de conversion:
  String()
  Number()
  // Tambien existen
  parseInt()
  parseFloat()
  toDateString()
  toUTCString()

  // Conversiones implicitas
  "0" == true // es false
  "0.1e1" == true // es true
  "false" == false // es false

  // Coercion
  const STR1 = 42 + "1" // Se convierte a string
  console.log(STR1) // 421
  console.log(typeof STR1) //string
  const STR2 = 42 - "1" // Se convierte a number
  console.log(STR2) // 41
  console.log(typeof STR2) // number

  1 == "1" // true
  1 == "one" // false
  true == 1 // true
  false == "zero" // false
  "test" == { x: "test" } // false

  1 + 1 // 2
  1 + "1" // 11
  "hello" + " world" // "hello world"
  "It's " + true // "It's true"
  "pizza" + { cheese: "extra" } // "pizza [object Object]"

  3 - 2 // 1
  "3" - 2 // 1
  3 - true // 2
  1 - { x: 3 } // NaN (Not a Number)
  "fun" - 2 // NaN

  isNaN()
  Infinity
  -Infinity

```

---

## Casting

Es lo que llamamos como cambiar una variable de tipo

---

## Metodos

- Metodo **toString()**

```js
nombreVariable.toString()
```

- Metodo **toFixed()**

```js
var numero = 9.99
numero.toFixed(0) // devuelve 10
numero.toFixed(1) // devuelve 10.0
numero.toFixed(2) // devuelve 9.99
numero.toFixed(3) // devuelve 9.990
```

---

- Metodo **toPrecision()**

```js
var numero = 9.99
numero.toPrecision(0) // devuelve 10
numero.toPrecision(1) // devuelve 1e+1
numero.toPrecision(2) // devuelve 10.
numero.toPrecision(3) // devuelve 9.99.
```

---

- **Window.prompt**

Si no se introduce valor, guarda "null" en la variable

```JS
let libroLeido = prompt("¿Cual es el titulo del ultimo libro que has leido?", default)
```

_Nota:_ **window.confirm** ( solicitud de confirmacion **window.alert** )

---

## Fechas

Hay cuatro formatos de fechas

```JS
  var v = new Date("11/23/2022") //Formato corto
  var v = new Date("Ago 17 2022") //Formato largo
  var v = new Date("Mon, Jun 20 2022 15:42:32 GMT+0100(W. Euro standard Time)") //Formato completo
  var v = new Date("2022/08/18") //Formato ISO
```

---

### Funciones de tiempo

Es necesario utilizar funciones(metodos) para mostrar la hora de forma mas habitual:

- **getHours()**
- **getMinutes()**
- **getSeconds()**

---

# Funciones

Estructua de declaracion mas habitual:

```JS
  function nombreFuncion(param1, param2){
    // Sentencias de codigo
    return 0; // puede hacer algun retorno o no
  }
```

---

- Variantes
  - Hay funciones sin parametros
  - Pueden devolver un dato o no
  - Se puede escribir una funcion sin el parentesis y guardarla en una variable
  - Existen las funciones sin nombre(Funcion anonima)
  - En JS las funciones son un tipo de datos mas por lo que podemos hacer cosas como pasarlas por argumento o asignarlas a una variable

---

```JS
const CUADRADO = function(value){
  return value * value
}
function aplica_fn(dato,funcion_a_aplicar){
  return funcion_a_aplicar(dato)
}
aplica_fn(3,CUADRADO) // Devolvera 9 (3^2)
```

Si se proporcionan menos argumentos de los que requiere la funcion el resultado es NaN(No es numero), y si se proporcionan mas argumentos de los que requiere la funcion se guardan en una matriz llamada "**arguments[]**"

---

- Funciones flecha: permiten definir de manera compacta una funcion convencional.

```JS

var diHola = (name) => `¡Hola ${name}`
var diAdios = (name) => {
  return `Adios ${name}`
}
console.log(diHola('Cris'))
console.log(diAdios('Cris'))

```

---

# Estructuras de control

---

## **if**

```js
if (param) {
  // codigo
} else {
  // no es obligatorio
  // codigo
}
```

---

## **elseif**

```js
if (param) {
  // codigo
} else if { // segunda condicion
  // codigo
} else{
  //codigo
}
```

---

## **switch**

```js
switch (param) {
  case valor: // se pueden poner tantos case como se requiera
    // codigo
    break // linea para romper el switch y que no haga mas  comprobaciones de los demas casos

  default: // equivalente a un else, si no es ningun caso, reliza este bloque
    // codigo
    break
}
```

---

## **for**

```js
for (let index = 0; index <= valor; index++ /*index--*/) {
  // Codigo en bucle
}

array.forEach(clave => {
  // codigo en bucle de los valores de un array
})

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key]
  }
}
```

---

## **while**

```js
while (param) {
  // codigo en bucle, comprueba la condicion y realiza el codigo
}
```

---

## **do while**

```js
do {
  // codigo en bucle, no comprueba hasta que realize el codigo al menos 1 vez
} while (param)
```

---

## Arrays (Vectores)

Es un conjunto de elementos a los que se accede por un indice.

```html
<p id="aqui"></p>
<script>
  const DIAS = ['lunes', 'martes', 'jueves', viernes]
  DIAS[1] = Date()
  document.getElementById('aqui').innerHTML = DIAS
  console.log(DIAS)
</script>
```

---

### Metodos

- **.join()**
- **.sort**
- **.reverse**
- **.toString()**
- **.split()**
- **.pop() y .shift()**: pop borra la ultima y shift la primera
- **delete**
- **.push() y .unshift()**: push añade alfinal y unshift al inicio del array
- **.splice()**: (2, 0, "50", "90"); from index 2, delete 0, then insert 50 and 90
- **.slice()**: (1, 2) fron index 1, delete 2 elements
- **.concat()**: añade uno o mas arrays
- **copyWithin**
- **reduce**

---

## Desestructuración

Consiste en deshacer una estructura en elementos individuales.

```js
const matriz = [5, 6]
const [first, final] = matriz // first = 5, last = 6

const matriz = [5, 4, 3, 2]
const [first, third] = matriz // first = 5, last = 3, rest = discard

const matriz = [4]
const [first, second] = matriz // first = 4, second = undefined
```

En la parte derecha los [] indican que se trata de un **array**, pero en la parte izquierda se utilizan para indicar que se hace una **desestructuración**

```js
// desagrupa
const debug = param => {
  console.log(...param)
}
const matriz = [1, 2, 3, 4, 5]
debug(matriz)

// agrupa
const debug1 = (...param) => {
  console.log(param)
}
debug1(5, 4, 3, 2, 1)

// el resto
const elements = [5, 4, 3, 2]
const [first, ...rest] = elements // first = 5, rest = [4,3,2]

// Ejemplo dentro de arrays
const pareja = [3, 4]
const completo = [1, 2, ...pareja, 5]
console.log(completo)
```

## Sets(conjuntos)

Es un objeto semejante a un Array que no permite valores duplicados

**const miSet= new Set(xxxxxxxxxxx)** donde **xxxxxxxxxxx** es un iterable (array,map, string,set)

```js
let conjunto = new Set(2, 3, 4, 5, 6, 7, 3, 5)
for (const elem of conjunto) {
  console.log(elem)
}
```

### Metodos Set

- Add
- Delete
- Clear
- Size
- Has

_recordatorio: con ...spread se convierte a Array_

**const miArray=[...miConjunto]**

```js
// Conseguir un array sin duplicados
let miArray = [1, 1, 1, 1, 3, 3, 4, 5, 5, 5, 3, 3, 4]
let miSet2 = new Set(miArray)
let miArrayFinal = [...miSet2]
console.log(miArrayFinal)

// Unir los tres arrays en uno sin valores repetidos
let miArray1 = [1, 2, 3, 4, 5, 6, 7, 8]
let miArray2 = [1, 2, 3, 8, 9, 0, 43, 45, 65]
let miArray3 = [17, 32, 87, 45]

let miArrayFinal = [...new Set([...miArray1, ...miArray2, ...miArray3])]
// Comprobamos que realmente sea un array nuestro resultado
console.log(miArrayFinal, miArrayFinal instanceof Array)
```

## Maps

une las caracteristicas de los Arrays y los Conjuntos organiza los datos en forma de pares clave-valor con claves unicas

**new Map()**

# Errores

Cuando se produce un error, JavaScript genera un objeto que contiene los detalles al respecto.

## Metodos

- RangeError -> valor fuera de limites
- ReferenceError -> referencia a objeto no valida
- SyntaxError -> Error de sintaxis
- TypeError -> Error de tipo
- URIError -> Función de manejo de URI global se usó de manera incorrecta.

## Manejo

Para manejar errores sin que rompan el programa podemos utilizar `try-catch()`.

Cuando salta un error y lo que queremos visualizar podemos utilizar lo siguiente:

```js
try {
  console.log('Inicio de sentencias de try')
  hola_caracola
  console.log('Fin de sentencias de try (Si/ )')
} catch (err) {
  console.log(`¡Un error ha ocurrido!`)
  console.log(err.name) // ReferenceError
  console.log(err.message) // hola_caracola is not defined
  console.log(err.stack) // tree de todo el error con mas detalles
}
```

---

# Objetos nativos

Los Objetos pueden ser nativos o de alto nivel (dependen del navegador)

Posteriormente, los objetos definidos por el usuario.

Los objetos Nativos no dependen del navegador.

- Date
- Math
- RegExp
- Array
- Function
- Object

Los Objetos de Alto Nivel dependen del navegador.

- Window
- Screen

**Definicion**

```js
var ciclista = { nombre: 'Pedro', apellido: 'Delgado', anio: 1998 }

var ciclista = new Object()
ciclista.nombre = 'Pedro'
ciclista.apellido = 'Delgado'
ciclista.edad = 35
```

Es una coleccion de variables y funciones agrupadas

## Objetos String

Las cadenas pueden:

- Instanciar
- Concatenar
- Medir

## Objetos Number

```JS
  // Pruebas del metodo toString()
  var miNumero = 27
  alert(miNumero.toString(2)) // cambia el numero a binario 11011

  // Infinito
  var inf = 2
  while (inf != Infinity) {
    alert(inf)
    inf *= inf
  }

  var div1 = 2,
    div2 = 0
  alert("Division 2/0=" + 2 / 0)
  alert("Division -2/0=" + -2 / 0)
  alert("Typeof: " + typeof (div1 / div2))

  // NaN
  let variable1 = 100 / "casa"
  let variable2 = 100 / "10"
  alert("La operacion 100/'casa' da comoresultado " + variable1)
  alert("La operacion 100/10 da comoresultado " + variable2) // En este caso ya sabemos que si lo hace

  var num = 123
  var num2 = new Number(123)
  var num3 = new Number(123)
  alert("num es un " + typeof num) // Devuelve number
  alert("num2 es un " + typeof num2) // Devuelve Object
  // No utilizar objeto. Es lento en la ejecucion y el New puede dar errores

  // Number.Propiedades
  var maximo = Number.MAX_VALUE // valor maximo que almacena un numero
  var minimo = Number.MIN_VALUE // valor minimo que puede almacenar una variable es
  var neginf = Number.NEGATIVE_INFINITY
  var posinf = Number.POSITIVE_INFINITY
  var numnan = Number.NaN

  // Metodos utiles
  var numeroPrueba = 17.46
  numeroPrueba.toFixed(1) // 17.5
  numeroPrueba.toPrecision(3) // 17.5
  numeroPrueba.toExponential() // 1.746e1
  numeroPrueba.valueOf()
  numeroPrueba.toString()
  numeroPrueba.toLocaleString()

  // Metodos Globales
  Number() // Valor numerico de una variable
  parseInt // Devuelve valor numerico
  parseFloat
  isNaN(valor) // Dice si valor es un numero
  isFinite(valor) // Dice si valor es un numero finito o infinito

  // Math
  // Viene predefinido en JS y permite realizar operaciones matematicas
  var aleatorio = Math.floor(Math.random()*11) // Numero aleatorio entre 0 y 10
```

## Constructores

```js
function Persona(nom, ape, ed) = {
  this.nombre = nom
  this.apellido = ape
  this.edad = ed
}

var persona1 = new Persona('Pedro', 'Delgado', 35)
```

La forma de recorrer un Objeto es con un bucle `for..in`

Podemos simular la herencia con Prototype Ejemplos en : [Ejercicio de Prototype](../Clase/Noviembre/Clase0811/objetos.js)

### Crear metodos

```js
const user = {
  name: 'Manz',
  talk: function () {
    return 'Hola'
  },
}
```

## JSON

Son las siglas de JavaScript Object Notation

diferencias entre JSON y un Objeto:

- Propiedades del objeto deben estar entre comillas con comillas dobles
- Los textos String deben ser entrecomillados
- Solo puede almacenar tipos como String, Number, Object, Array, Boolean o null
- Tipos como Function, regex, date u otros tipos no son posibles de almacenar.

En JS existen una serie de metodos que facilian la tarea de pasar de un Objeto de JS a JSON viceversa(parsear),pudiendo trabajar con contenido de tipo String(que contenga un JSON) y objetos JS segun interese.

### Metodos

Dichos metodos son los siguientes:

```js
JSON.parse(str) // Convierte en texto `str`(si es un JSON valido) a un objeto y lo devuelve.
JSON.stringify(obj) // Convierte un objeto JavaScript `obj` a su representacion JSON y la devuelve.
JSON.stringify(obj, props) // Idem al anterior, pero filtra y mantiene solo las propiedades del array `props`
JSON.stringify(obj, props, spaces) // Idem al anterior, pero identa el JSON a number `spaces` espacios
```

## Clases

_proximamente..._

## Desestructuración de Objetos

Utilizando la desestrucuturacion de objetos se puede separar en variables las propiedades que tenga un objeto:

```js
const user = {
  name: 'Otto',
  role: 'arquero',
  life: 99,
}
// Como se desestructura...

const { name, role, life } = user

console.log(name)
console.log(role, life)

// O tambien
console.log({ name, role, life })
// Que en realidad es volver a estructurar para mostrar
```

La desestructuracion solo funciona para estructuras de datos.
Con un objeto que contenga metodos o elementos de DOM

```js
const user = {
  name: 'Otto',
  role: 'arquero',
  life: 99,
}

const fullUser = {
  ...user,
  power: 25,
  life: 50,
}
/**
 * En este ejemplo, se crea un nuevo objeto fullUser con las mismas propiedades de user,
 * añadiendole la nueva propiedad power y sobreescibiendo la propiedad life con valor 50
 */
```

Trabajando con valores primitivos en JS se pasan por valor
Pero, para valores mas complejos se utiliza el paso por referencia

```js
const user = {
  name: 'Otto',
  role: 'arquero',
  life: 99,
  features: ['learn', 'code', 'paint'],
}

const fullUser = {
  ...user,
  power: 25,
  life: 50,
}

// Vamos a ver que es lo que obtiene
console.log(user.features) // ["learn", "code", "paint"]
console.log(fullUser.features) // ["learn", "code", "paint"]

fullUser.features[0] = 'program'

console.log(user.features) // ["program", "code", "paint"]
console.log(fullUser.features) // ["program", "code", "paint"]

/**
 * En este ejemplo, le añadimos una lista llamada features a user y luego hacemos la herencia en fullUser,
 * Si intentamos cambiar el valor de algun elemento en la lista de  fullUser, lo que pasara es que
 * tambien cambiara en user, esto es debido a que ese valor (lista/objeto) se pasa por referencia
 */
```

Para salvar esta cirscuntancia se puede utilizar la funcion strucutedClone() a la que se le pasa
el objeto a copiar. Esta funcion hara, ahora si, una copia, devolviendo un nuevo objeto, y no la referencia.

```js
const user = {
  name: 'Otto',
  role: 'arquero',
  life: 99,
  features: ['learn', 'code', 'paint'],
}

const fullUser = {
  ...structuredClone(user),
  power: 25,
  life: 50,
}

// Vamos a ver que es lo que obtiene
console.log(user.features) // ["learn", "code", "paint"]
console.log(fullUser.features) // ["learn", "code", "paint"]

fullUser.features[0] = 'program'

console.log(user.features) // ["learn", "code", "paint"]
console.log(fullUser.features) // ["program", "code", "paint"]

/**
 * En este ejemplo, conseguimos que la lista añadida no se pase por referencia y podamos tratarla de forma
 * independiente al otro objeto
 */
```

### Metodos

```js
Object.keys(obj) // Devuelve Array de los indices del iterable(en una cadena --- numero de letras)
Object.values(obj) // Devuelve Array de los contenidos del iterable
Object.entries(obj) // Devuelve Array de los pares claves:valor
```

# Objetos del navegador

BOM (Browser Object Model). Permite que JS se comunique con el navegador obteniendo y manipulando sus caracteristicas.

Son los llamados **OBJETOS DE ALTO NIVEL** y dependen del navegador:

- Window
- Screen
- Navigator
- Location
- History
- Event
- Document

## Window

Se utiliza para tratar con las ventanas del navegador

### Metodos

```js
window.open() // permite abrir una nueva ventana, pudiendo indicar que url se va a cargar en ella y que caracteristicas va a tener.
window.close() // permite cerrar la ventana que ha llamado el metodo
window.resizeBy() // redimensiona la ventana a un numero de pixeles en relacion con el tamaño que tiene actualmente
window.resizeTo() // ''
window.moveBy() // mueve la ventana a un numero de pixeles en relacion con el tamaño que tiene actualmente
window.moveTo() // ''
```

## History

Para consultar las URL de las paginas que ha visitado un usuario dentro de una ventana de navegador. Permite manipular el historial utilizando JS sin necesidad de interactuar con el propio navegador.

### Propiedad

- lenght: almacena el numero de paginas que contiene el historial

`history.length`

### Metodos

- back
- forward
- go

```js
function atras() {
  // funcion para utilizarlo con un boton
  history.back() // retorna a la pagina anterior
}
history.forward() // avanza a la pagina siguiente
history.go() // redirige a la pagina deseada
```

## Location

Almaccena la infomacion de la URL de la pagina

```js
'Href: ' + location.href
'Hostname: ' + location.hostname
'Hash: ' + location.hash
'Host: ' + location.host
```

## Eventos

Un evento es cualquier suceso que puede producirse en un elemento de una pagina WEB, un mecanismo que puede provocar una reaccion mediante la ejecucion de un metodo.

### Ejemplo

Este codigo tiene un titulo con el texto de `Hazme Click!` y cuando se le da click al elemento cambia el texto por `mi texto`. Aparte cuando el raton pasa por encima cambia el color del fondo por rojo y cuando deja de estar encima vuelve al color por defecto.

```html
<h1
  onclick="this.innerHTML = 'mi texto'"
  onmouseover="this.style.backgroundColor = 'red'"
  onmouseleave="this.style.backgroundColor = ''"
>
  Hazme Click!
</h1>
```

### Modelo Tradicional

¿En que consiste un modelo de eventos tradicional?

Consiste en aplicar sobre un elemento seleccionado a traves de JavaScript.

### Modelo W3C

Con el metodo `addEventListener()`

Parametros:

- El evento
- la funcion a ejecutar
- Opcional true/false de momento siempre pondremos false

# Programación funcional



# Objetos definidos por el usuario
