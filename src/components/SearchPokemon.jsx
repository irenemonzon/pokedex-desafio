import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const SearchPokemon = () => {
  const { inputSearch, onInputChange, setPokemonSearch } = useContext(PokemonContext)

  const onSearch = e => {
    e.preventDefault()
    setPokemonSearch(inputSearch)
  }

  return (
    <div className=' flex w-full'>
      <div className='flex w-full justify-end my-8 pr-16'>
        <form onSubmit={onSearch} className='flex'>

          <div className='mr-4'>
            <input
              type='search'
              name='inputSearch'
              placeholder='Buscar nombre de pokemon'
              className='shadow appearance-none border w-64 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={inputSearch}
              onChange={onInputChange}
            />
          </div>
          <div className='mt-1'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded'
            >Buscar
            </button>

          </div>
        </form>

      </div>

    </div>
  )
}
