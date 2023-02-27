import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { PokemonContext } from '../context/PokemonContext'

describe(('Context'), () => {
  it('should render title correctly', () => {
    render(
      <PokemonContext.Provider value={{ dataPokemon: true }}>
        <div>
          <h1>Pokemon Data</h1>
        </div>
      </PokemonContext.Provider>)
    expect(screen.getByRole('heading')).toMatch(/Pokemon Data/)
  })
})
