
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
  let resultado = "pe"
  console.log(arrayPalabra)
  arrayPalabra.forEach((letra, i) => {
    if (
      vocales.includes(letra) && // Si icluye alguna vocal
      arrayPalabra[i + 1] && // Si existe algo despues de esa letra
      !vocales.includes(arrayPalabra[i + 1]) // Si no incluye otra vocal despues
    ) {
      resultado += letra + "pe" // Si todo se cumple añadimos la letra mas pe
    } else {
      resultado += letra // Si alguna de las codiciones no se cumple solo añadimos la letra
    }
  })
  return resultado 
}

console.log(cifradoPe("Autenticacion"))

// peAupetepentipecapeciopen