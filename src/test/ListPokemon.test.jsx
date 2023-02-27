import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ListPokemon } from '../components/ListPokemon'
import { PokemonContext } from '../context/PokemonContext'
import { handlers } from '../mocks/handlers'

describe(('ListPokemon'), async () => {
  const mockDetailPokemon = [{
    name: 'bulbasaur',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/'
        }
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/'
        }
      }
    ]
  }]

  it('should display the expect quotes', async () => {
    render(
      <PokemonContext.Provider value={{ dataPokemon: mockDetailPokemon }}>
        <ListPokemon />
      </PokemonContext.Provider>)
    const listLength = await screen.findAllByRole('listitem')
    expect(listLength).toHaveLength(3)
    expect(await screen.findByText(/bulbasaur/i))
  })
})
