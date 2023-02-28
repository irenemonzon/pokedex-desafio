import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import { firstWordUppercase } from '../utils/firstWordUppercase'

export const ListPokemon = () => {
  const context = useContext(PokemonContext)
  const { dataPokemon, inputSearch } = context
  const filtered = dataPokemon?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(inputSearch.toLowerCase())
  })

  return (
    <>
      {filtered.length
        ? (
          <div className='xs:flex flex-col xs:items-center sm:grid grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols- pb-8'>

            {filtered.map((pokemon) => (
              <div className='flex justify-center items-center rounded-md border-2 border-blue-300 shadow-lg  py-8 w-60 text-center xs:mb-8 sm:mb-0 hover:border-blue-500' key={pokemon.name}>
                <ul>
                  <li className='flex justify-center items-center'>
                    <div>
                      <img src={pokemon.sprites} />
                    </div>

                  </li>
                  <li>Nº {pokemon.id}</li>
                  <li>{firstWordUppercase(pokemon.name)}</li>

                  <Link to={`pokemon/${pokemon.id}`} state={pokemon}>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white  px-4 rounded mt-4'>Ver Ficha</button>
                  </Link>

                </ul>
              </div>
            ))}
          </div>
          )
        : (

          <div className='flex justify-center text-center pt-12'>
            <p>No existe resultado de su búsqueda</p>
          </div>

          )}

    </>

  )
}
