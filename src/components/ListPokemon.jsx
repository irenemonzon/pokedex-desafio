import { useContext, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { firstWordUppercase } from '../utils/firstWordUppercase'
import { ModalPokemon } from './ModalPokemon'

export const ListPokemon = () => {
  const context = useContext(PokemonContext)
  const { dataPokemon, inputSearch } = context
  const [showModal, setShowModal] = useState(false)
  const [dataModalPokemon, setDataModalPokemon] = useState({})
  const filtered = dataPokemon?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(inputSearch.toLowerCase())
  })

  const handleShowModal = (pokemon) => {
    setDataModalPokemon(pokemon)
    setShowModal(true)
  }

  return (
    <>
      {showModal && (
        <ModalPokemon
          setShowModal={setShowModal}
          dataModalPokemon={dataModalPokemon}
        />
      )}
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
                    <button type='button' onClick={() => handleShowModal(pokemon)} className='bg-blue-500 hover:bg-blue-700 text-white  px-4 rounded mt-4'>Ver Ficha</button>
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
