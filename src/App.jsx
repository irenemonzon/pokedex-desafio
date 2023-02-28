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
    const resPokemon = getDataPokemon.map((data) => {
      return data.data
    })
    console.log('resPokemon', resPokemon)
    setDataPokemon(resPokemon)
    setLoading(true)
    const dataLocalStorage = []
    resPokemon.map(object => dataLocalStorage.push({
      name: object.name,
      abilities: object.abilities,
      types: object.types,
      species: object.species,
      location_area_encounters: object.location_area_encounters,
      sprites: object.sprites.front_default,
      height: object.height,
      id: object.id,
      weight: object.weight
    }))
    window.localStorage.setItem('dataPokemon', JSON.stringify(dataLocalStorage))
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
      <div>
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
