import { useLocation } from 'react-router-dom'
import { firstWordUppercase } from '../utils/firstWordUppercase'

export const PokemonDetailsPage = () => {
  const location = useLocation()
  const detailsPokemon = location.state
  console.log('location', location.state)
  return (
    <div>
      <div className=' py-8 w-60 text-center xs:mb-8 sm:mb-0'>
        <h1>Mas detalles pokemon</h1>
        {detailsPokemon !== undefined && (

          <ul>
            <li className='flex justify-center items-center'>
              <div>
                <img src={detailsPokemon.sprites.front_default} />
              </div>
            </li>
            <li>Nº {detailsPokemon.id}</li>
            <li>{firstWordUppercase(detailsPokemon.name)}</li>
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
          </ul>
        )}
      </div>
    </div>
  )
}
