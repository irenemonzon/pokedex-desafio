import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PokemonContext } from './context/PokemonContext'
import { useInput } from './hooks/useInput'
import { getPokemon } from './services/Pokemon.service'
import { Loading, HeaderNavigation } from './components/index'
import { Home } from './pages/Home'
import { PokemonDetailsPage } from './pages/PokemonDetailsPage'

function App () {
  const [dataPokemon, setDataPokemon] = useState([])

  const [loading, setLoading] = useState(false)
  const { inputSearch, onInputChange, onReset } = useInput({
    inputSearch: ''
  })

  const getPokemons = async () => {
    const getDataPokemon = await getPokemon()

    const NewDataPokemon = []
    getDataPokemon.map(pokemon => NewDataPokemon.push({
      name: pokemon.data.name,
      abilities: pokemon.data.abilities,
      types: pokemon.data.types,
      sprites: pokemon.data.sprites.front_default,
      height: pokemon.data.height,
      id: pokemon.data.id,
      stats: pokemon.data.stats,
      weight: pokemon.data.weight,
      location_area_encounters: pokemon.data.location_area_encounters,
      evolution: pokemon.dataEvolution.chain.evolves_to,
      svg: pokemon.data.sprites.other.dream_world.front_default

    }))

    setDataPokemon(NewDataPokemon)
    setLoading(true)
    window.localStorage.setItem('dataPokemon', JSON.stringify(NewDataPokemon))
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <PokemonContext.Provider
      value={{
        dataPokemon,
        inputSearch,
        onInputChange,
        onReset
      }}
    >
      <div className='container mx-auto '>
        {loading
          ? (
            <Routes>
              <Route path='/' element={<HeaderNavigation />}>
                <Route index element={<Home />} />
                <Route path='pokemon/:id' element={<PokemonDetailsPage />} />
              </Route>

              <Route path='*' element={<Navigate to='/' />} />
            </Routes>

            )
          : (<Loading />)}

      </div>
    </PokemonContext.Provider>

  )
}

export default App
