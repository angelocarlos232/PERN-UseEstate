import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import About from '../pages/About';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';


const Navbar = () => {
  return (
    <header className='bg-fafafa shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-5'>
      <Link to='/'><h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-default-red font-extrabold'>Use</span>
        <span className='font-bold'>EState</span>
      </h1></Link>
      <form className='bg-white p-3 rounded-2xl flex items-center'>
         <input className='bg-transparent focus:outline-none w-24 sm:w-64' 
         type='text' placeholder='Search...' />
         <SearchIcon />
      </form>
      <ul className='flex gap-4'>
      <Link to='/'><li className="hidden sm:inline text-default-brown hover:text-default-red hover:border-b-2 hover:border-default-red">Home</li></Link>
      <Link to='/about'><li className="hidden sm:inline text-default-brown hover:text-default-red hover:border-b-2 hover:border-default-red">About</li></Link>
      <Link to='/signin'><li className=" sm:inline text-default-brown hover:text-default-red hover:border-b-2 hover:border-default-red">Sign In</li></Link>   
      
      </ul>
      </div>
    </header>
  )
}

export default Navbar
