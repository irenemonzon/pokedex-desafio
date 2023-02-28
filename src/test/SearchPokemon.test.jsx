import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { SearchPokemon } from '../components/SearchPokemon'
import { PokemonContext } from '../context/PokemonContext'

beforeEach(() => {
  render(
    <PokemonContext.Provider value={{ dataPokemon: true }}>
      <SearchPokemon />
    </PokemonContext.Provider>)
})
describe(('SearchPokemon'), async () => {
  afterEach(cleanup)
  it('should render input elements', async () => {
    expect(screen.getByRole('searchbox')).toBeDefined()
  })
})
