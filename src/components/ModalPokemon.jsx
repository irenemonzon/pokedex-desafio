import { firstWordUppercase } from '../utils/firstWordUppercase'

export const ModalPokemon=({dataModalPokemon,setShowModal})=>{
  console.log('dataModalPokemon',dataModalPokemon)

return(
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-700 bg-opacity-70'>
      <div className='relative w-auto my-6 mx-auto max-w-[400px]'>
        <div className='border-0 rounded-lg shadow-lg relative flex flex-col justify-center items-center bg-white  outline-none focus:outline-none w-[400px]'>
          <button onClick={()=>setShowModal(false)} className ='absolute top-2 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center' type='button'> 
          <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
          </button>
          <div className=' py-8 w-60 text-center xs:mb-8 sm:mb-0'>
            <ul>
              <li className='flex justify-center items-center'>
                <div>
                  <img src={dataModalPokemon.sprites.front_default} />
                </div>
              </li>
              <li>Nº {dataModalPokemon.id}</li>
              <li>{firstWordUppercase(dataModalPokemon.name)}</li>
              <li>
                <span>
                  Habilidades:
                  {dataModalPokemon.abilities.map((abilities, index) => (
                    <span key={index}> {abilities.ability.name}</span>
                  ))}
                </span>
              </li>
              <li>
                <span>
                  Tipo:
                  {dataModalPokemon.types.map((type, index) => (
                    <span key={index}> {type.type.name}</span>
                  ))}
                </span>
              </li>
            </ul>
            </div>
        </div>
      </div>
    </div>
    )
    }