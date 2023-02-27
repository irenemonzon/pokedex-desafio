import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { ListPokemon } from '../components/ListPokemon'
import { PokemonContext } from '../context/PokemonContext'

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

beforeEach(() => {
  render(
    <PokemonContext.Provider value={{ dataPokemon: mockDetailPokemon, pokemonSearch: 'bulbasaur', inputSearch: 'bulb' }}>
      <ListPokemon />
    </PokemonContext.Provider>)
})

describe(('ListPokemon'), async () => {
  afterEach(cleanup)
  it('should render expect name pokemon', async () => {
    expect(await screen.findByText(/bulbasaur/i))
  })

  it('should render elements in card', async () => {
    const listLength = await screen.findAllByRole('listitem')
    expect(listLength).toHaveLength(4)
  })
})
