import React from 'react'
import { Navbar } from './Navbar.jsx'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
      <header>
        <div className='bg-black min-[720px]:px-20 w-full flex flex-row items-center justify-between pt-2 px-5 relative'>
          <Link to = '/'>    
              <div className='logo flex flex-row items-center justify-between gap-4 text-lg text-sky-400'>
                <img className="w-[42px] h-[42px]" src={Logo} />
              <div className=' font-bold text-[#fff]'>Homeplience</div>
              </div> 
            </Link> 
          <Navbar /> 
        </div>
      </header>
  )
}
