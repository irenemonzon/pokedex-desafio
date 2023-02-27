import axios from 'axios'

export const getAllPokemon = async (limit = 150) => {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const res = await axios.get(`${url}?limit=${limit}&offset=0`)

  const dataUrl = res.data.results.map(async (pokemon) => {
    const res = await axios.get(pokemon.url)
    const data = res.data
    return data
  })
  const results = await Promise.all(dataUrl)
  //   window.localStorage.setItem('dataPokemon', JSON.stringify(results))
  return results
}