import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ListPokemon } from '../components/ListPokemon'
import { PokemonContext } from '../context/PokemonContext'
import { getAllPokemon } from '../services/Pokemon.service'

describe(('ListPokemon'), async () => {
  const responseAllPokemon = await getAllPokemon()

  it('should display the expect quotes', async () => {
    render(
      <PokemonContext.Provider value={{ dataPokemon: responseAllPokemon }}>
        <ListPokemon />
      </PokemonContext.Provider>)
    expect(await screen.findByText(/bulbasaur/i))
  })
})
