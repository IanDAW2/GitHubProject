
/**
 * Escribe una funcion que acepte una unica palabra (no hay espacios en blanco ni tildes) y la devuelva codificada siguiendo las siguientes reglas:
 * * La palabra codificada debe comenzar con "pe".
 * * La "pe" va detras de una vocal.
 * * Cuando hay varias vocales juntas, la "pe" va solo despues de la ultima vocal.
 * * Cuando la palabra termina con una vocal, no se agrega el "pe" despues.
 * * La cadena de palabras se compone unicamente de caracteres en minusculas y mayusculas.
 *
 * Obtener el cifrado de la palabra *Autenticacion* y colocarlo en una linea de comentario, al final del codigo.
 */

const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function cifradoPe(palabra) {
  arrayPalabra = [...palabra]
  let resultado = ""
  console.log(arrayPalabra)
  arrayPalabra.forEach((letra, i) => {
    if (
      vocales.includes(letra) &&
      arrayPalabra[i + 1] &&
      !vocales.includes(arrayPalabra[i + 1])
    ) {
      resultado += letra + "pe"
    } else {
      resultado += letra
    }
  })
  return "pe" + resultado
}

console.log(cifradoPe("Autenticacion"))

// peAupetepentipecapeciopen