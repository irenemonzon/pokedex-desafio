import axios from 'axios'

export const getPokemon = async (limit = 150) => {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const urlEvolution = 'https://pokeapi.co/api/v2/evolution-chain'
  const res = await axios.get(`${url}?limit=${limit}&offset=0`)

  const dataUrl = res.data.results.map(async (pokemon) => {
    const res = await axios.get(pokemon.url)
    const data = res.data
    const idPokemon = res.data.id
    const resEvolution = await axios.get(`${urlEvolution}/${idPokemon}/`)
    const dataEvolution = resEvolution.data
    return { data, dataEvolution }
  })
  const results = await Promise.all(dataUrl)
  return results
}
