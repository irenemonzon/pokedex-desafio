import { useEffect, useState } from 'react'
import { ListPokemon } from './components/ListPokemon'
import { PokemonContext } from './context/PokemonContext'
import { getAllPokemon } from './services/Pokemon.service'

function App () {
  const [dataPokemon, setDataPokemon] = useState([])
  const [loading, setLoading] = useState(false)

  const getPokemons = async () => {
    const getDataPokemon = await getAllPokemon()
    setDataPokemon(getDataPokemon)
    setLoading(true)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <PokemonContext.Provider value={{ dataPokemon }}>
      <div>
        <div className='container mx-auto mt-20'>
          <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto text-orange-300 mb-8'>Pokemon Data</h1>
          {loading && (
            <ListPokemon />
          )}

        </div>

      </div>
    </PokemonContext.Provider>

  )
}

export default App
