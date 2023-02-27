import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

// import { PokemonProvider } from '../context/PokemonProvider'
import { PokemonContext } from '../context/PokemonContext'

describe(('Context'), () => {
  it('should render title correctly', () => {
    render(
      <PokemonContext.Provider value={{ dataPokemon: true }}>
        <div>
          <div className='container mx-auto mt-20'>
            <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto text-orange-300 mb-8'>Pokemon Data</h1>
            {/* <ListPokemon /> */}
          </div>

        </div>
      </PokemonContext.Provider>)
    expect(screen.getByRole('heading')).toMatch(/Pokemon Data/)
  })
})
