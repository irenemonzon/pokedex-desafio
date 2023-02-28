import { rest } from 'msw'

const mockPokemonResponse = {
  count: 1279,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=1&limit=1',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    }
  ]
}
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

export const handlers = [

  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockPokemonResponse)
    )
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/1/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockDetailPokemon)
    )
  })
]
