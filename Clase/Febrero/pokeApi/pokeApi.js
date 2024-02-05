const listaPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  const data = await response.json()
  return data.results
}

document
listaPokemons().then(pokemons => {
  pokemons.forEach(async pokemon => {
    await fetch(pokemon.url)
      .then(async response => await response.json())
      .then(pokemon => {
        displayPokemon(pokemon)
      })
  })
})

function displayPokemon(pokemon) {
  const div = document.createElement('div')
  document.querySelector('main').appendChild(div)

  const h2 = document.createElement('h2')
  h2.textContent = pokemon.name
  div.append(h2)

  const img = document.createElement('img')
  img.src = pokemon.sprites.front_default
  img.alt = pokemon.name
  img.width = 100 // 100px
  img.height = 100 // 100px
  div.append(img)
}
