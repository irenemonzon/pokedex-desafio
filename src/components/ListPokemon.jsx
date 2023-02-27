import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const ListPokemon = () => {
  const context = useContext(PokemonContext)
  const { dataPokemon } = context
  //   console.log('dataPokemon', dataPokemon)
  //   const localPokemon = JSON.parse(window.localStorage.getItem('dataPokemon'))
  //   console.log('localPokemon', localPokemon)

  return (
    <>
      {dataPokemon
        ? (
          <div className=' grid grid-cols-3 md:grid-cols-3 gap-8 '>
            {dataPokemon.map((pokemon) => (
              <div className='flex justify-center items-center rounded  shadow-lg py-8 w-60 text-center' key={pokemon.name}>
                <ul>
                  <li className='flex justify-center items-center'>
                    <img src={pokemon.sprites.front_default} />
                  </li>
                  <li>{pokemon.name}</li>
                  <li>
                    <span>
                      tipo:
                      {pokemon.types.map((type, index) => (
                        <span key={index}> {type.type.name}</span>
                      ))}

                    </span>

                  </li>

                </ul>

              </div>

            ))}
          </div>
          )
        : <p> no existen pokemones</p>}

    </>

  )
}
