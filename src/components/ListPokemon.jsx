import { useEffect, useState } from 'react'
import axios from 'axios'

export const ListPokemon = () => {
  const [dataListPokemon, setDataListPokemon] = useState([])

  const getAllPokemon = async (limit = 150) => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const res = await axios.get(`${url}?limit=${limit}&offset=0`)

    const dataUrl = res.data.results.map(async (pokemon) => {
      const res = await axios.get(pokemon.url)
      const data = res.data
      return data
    })
    const results = await Promise.all(dataUrl)
    setDataListPokemon(results)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])
  return (
    <>
      {dataListPokemon && dataListPokemon.length
        ? (
          <>
            {dataListPokemon.map((pokemon) => (
              <ul key={pokemon.name}>
                <li>
                  <img src={pokemon.sprites.front_default} />
                </li>
                <li>name: {pokemon.name}</li>
                <li>
                  {pokemon.types.map((type, index) => (
                    <span key={index}>{type.type.name}</span>
                  ))}

                </li>

              </ul>
            ))}
          </>
          )
        : <p> no existen pokemones</p>}

    </>

  )
}
