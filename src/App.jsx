import { useEffect, useState } from 'react'
import { getPokemon, getAllPokemons } from './services/Pokemon.service'
import { ListPokemon, SearchPokemon, Loading } from './components/index'
import { PokemonContext } from './context/PokemonContext'
import { useInput } from './hooks/useInput'

function App () {
  const [dataPokemon, setDataPokemon] = useState([])
  const [allPokemon, setAllPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [pokemonSearch, setPokemonSearch] = useState('')
  const { inputSearch, onInputChange, onReset } = useInput({
    inputSearch: ''
  })

  const getPokemons = async () => {
    const getDataPokemon = await getPokemon()
    setDataPokemon(getDataPokemon)
    setLoading(true)
  }
  const getAllPokemon = async () => {
    const getDataPokemon = await getAllPokemons()
    setAllPokemon(getDataPokemon)
    setLoading(true)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <PokemonContext.Provider
      value={{
        dataPokemon,
        allPokemon,
        inputSearch,
        onInputChange,
        onReset,
        setPokemonSearch,
        pokemonSearch
      }}
    >
      <div>
        <div className='container mx-auto mt-20'>
          <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto text-orange-400 mb-8'>Pokemon Data</h1>
          {loading
            ? (
              <>
                <SearchPokemon />
                <ListPokemon />
              </>

              )
            : (<Loading />)}

        </div>

      </div>
    </PokemonContext.Provider>

  )
}

export default App
