import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const SearchPokemon = () => {
  const { inputSearch, onInputChange } = useContext(PokemonContext)

  return (
    <div className=' flex w-full'>
      <div className='flex w-full justify-end my-8 pr-6'>

        <div className='mr-4'>
          <input
            type='search'
            name='inputSearch'
            placeholder='Buscar por nombre de pokemon'
            className='shadow appearance-none border w-80 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={inputSearch}
            onChange={onInputChange}
          />
        </div>

      </div>

    </div>
  )
}
