import { useLocation } from 'react-router-dom'
import { firstWordUppercase } from '../utils/firstWordUppercase'

export const PokemonDetailsPage = () => {
  const location = useLocation()
  const detailsPokemon = location.state
  return (
    <div className='flex  my-6 mx-auto w-full'>
      <div className='flex xs:flex-col sm:flex-row lg:w-[80%] sm:justify-between content-center w-full rounded-xl border-2 bg-blue-400 shadow-lg py-20 mx-10 mt-[100px] relative text-white'>
        {detailsPokemon !== undefined && (
          <>
            <div className='flex flex-col mt-2 text-center justify-center ml-8  '>
              <div className='flex flex-col sm:absolute top-4 left-6 font-bold xs:mb-2 sm:mb-0'>
                <span>Nº {detailsPokemon.id}</span>
                <span className=' text-orange-300 text-3xl'>{firstWordUppercase(detailsPokemon.name)}</span>
              </div>

              <span className='font-semibold'>Peso:  <span className='font-extralight'>{detailsPokemon.weight} Kg</span></span>
              <span className='font-semibold'>Altura:<span className='font-extralight'>{detailsPokemon.height} m</span> </span>
              <div className='flex flex-col mt-6'>
                <span className='text-orange-200 font-semibold text-lg'> Tipo</span>
                <span>
                  {detailsPokemon.types.map((type, index) => (
                    <span key={index}> {type.type.name}</span>
                  ))}
                </span>
              </div>
            </div>
            <div className='flex flex-col mt-2 text-center justify-center '>
              <div className='flex flex-col'>
                <span className='text-orange-200 font-semibold text-lg'>
                  Habilidades
                </span>
                <span>
                  {detailsPokemon.abilities.map((abilities, index) => (
                    <span key={index}> {abilities.ability.name}</span>
                  ))}
                </span>
              </div>
              <div className='mt-6 xs:mb-4 sm:mb-0'>
                <span className='text-orange-200 font-semibold text-lg'> Evolución</span>
                <span>
                  {detailsPokemon.evolution.map((evolution, index) => (
                    <div key={index}>
                      <span> {evolution.species.name}</span>
                      {evolution.evolves_to.length && (
                        <span> {evolution.evolves_to[0].species.name}</span>
                      )}
                    </div>
                  ))}
                </span>
              </div>
            </div>
            <div className='flex justify-center mr-10'>
              <div>
                <img className='h-40' src={detailsPokemon.svg} />
              </div>
            </div>
          </>

        )}
      </div>
    </div>
  )
}
