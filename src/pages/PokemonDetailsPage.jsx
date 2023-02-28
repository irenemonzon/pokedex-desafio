import { useLocation } from 'react-router-dom'
import { firstWordUppercase } from '../utils/firstWordUppercase'

export const PokemonDetailsPage = () => {
  const location = useLocation()
  const detailsPokemon = location.state
  console.log('detailsPokemon', detailsPokemon)
  return (
    <div className='relative w-auto my-6 mx-auto max-w-[400px]'>
      <div className='flex justify-center items-center w-[400px]'>
        {detailsPokemon !== undefined && (

          <ul className='flex mt-24'>

            <div className=''>

              <li>Nº {detailsPokemon.id}</li>
              <li>{firstWordUppercase(detailsPokemon.name)}</li>
              <li>Peso:{detailsPokemon.weight} Kg</li>
              <li>Altura: {detailsPokemon.height} m</li>
              <li>
                <span>
                  Habilidades:
                  {detailsPokemon.abilities.map((abilities, index) => (
                    <span key={index}> {abilities.ability.name}</span>
                  ))}
                </span>
              </li>
              <li>
                <span>
                  Tipo:
                  {detailsPokemon.types.map((type, index) => (
                    <span key={index}> {type.type.name}</span>
                  ))}
                </span>
              </li>
              <li>
                <span>
                  Evolución:
                  {detailsPokemon.evolution.map((evolution, index) => (
                    <div key={index}>
                      <span> {evolution.species.name}</span>
                      {evolution.evolves_to.length && (
                        <span> {evolution.evolves_to[0].species.name}</span>
                      )}

                    </div>

                  ))}
                </span>

              </li>
            </div>
            <div>
              <li className='flex justify-end'>
                <div>
                  <img src={detailsPokemon.svg} />
                </div>
              </li>
            </div>
          </ul>
        )}
      </div>
    </div>
  )
}
