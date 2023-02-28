import { Link, Outlet } from 'react-router-dom'
export const HeaderNavigation = () => {
  return (

    <div className='container mx-auto w-full h-screen flex flex-col'>
      <div className='items-center'>
        <Link to='/'>
          <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto text-orange-400 mb-10 hover:text-orange-600 pt-12'>Pokemon Data</h1>
        </Link>

      </div>

      <Outlet />
    </div>

  )
}
