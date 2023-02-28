import { Link, Outlet } from 'react-router-dom'
export const HeaderNavigation = () => {
  return (
    <div>
      <div className='container mx-auto mt-20 pb-10'>
        <Link to='/'>
          <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto text-orange-400 mb-8'>Pokemon Data</h1>
        </Link>
        <Outlet />
      </div>
    </div>
  )
}
