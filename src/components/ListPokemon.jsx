import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { firstWordUppercase } from '../utils/firstWordUppercase'

export const ListPokemon = () => {
  const context = useContext(PokemonContext)
  const { dataPokemon, inputSearch } = context

  const filtered = dataPokemon?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(inputSearch.toLowerCase())
  })
  console.log('filtered', filtered)

  return (
    <>
      {filtered.length
        ? (
          <div className='xs:flex flex-col xs:items-center sm:grid grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5'>
            {filtered.map((pokemon) => (
              <div className='flex justify-center items-center rounded-md border border-gray-200 shadow-lg  py-8 w-60 text-center xs:mb-8 sm:mb-0' key={pokemon.name}>
                <ul>
                  <li className='flex justify-center items-center'>
                    <div>
                      <img src={pokemon.sprites.front_default} />
                    </div>

                  </li>
                  <li>Nº {pokemon.id}</li>
                  <li>{firstWordUppercase(pokemon.name)}</li>
                  <li>
                    <span>
                      Tipo:
                      {pokemon.types.map((type, index) => (
                        <span key={index}> {type.type.name}</span>
                      ))}
                    </span>
                  </li>
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
