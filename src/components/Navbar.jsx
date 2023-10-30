import React, { useState } from 'react'
import MenuLogo from '../assets/MenuLogo.png'
import CloseLogo from '../assets/CloseLogo.png'
import { NavLink } from 'react-router-dom'; 
export const Navbar = () => {
  let [open, setOpen] = useState(false);

  const links = [
    { name: 'HOME' , url: '/'}, 
    { name: 'CATEGORIES', url: '/categories' },
    { name: 'CART' , url : '/cart'} 
  ]
  return (
    <nav className='menu text-lg font-bold text-[#fff] flex flex-row items-center gap-20 p-5 rounded-md '>
      <img
        src={open ? CloseLogo : MenuLogo}
        className='w-[20px] h-[20px] z-20 cursor-pointer md:hidden'
        onClick={() =>{ setOpen(!open)}}/>
      <ul className={`z-10 md:static fixed duration-500 ease-linear md:h-auto h-screen top-0 right-0  bg-[#0d082c]
       ${!open ? 'right-[-100%]' : 'right-0 w-[50%] md:w-[100%]'}`}>
        {
          links.map((link, index) => (
            <li key={index} 
              className='md:inline-block lg:ml-5 lg:mr-10 ml-5 mr-5 md:my-0 max-[850px]:mr-2 max-[850px]:ml-2 '>
            

              <NavLink 
                  onClick={() =>{ setOpen(!open)}}
                  to={link.url} 
                  className={({ isActive, isPending }) =>
                    isPending ? 'inline-block md:py-5 py-3 pending' :
                    isActive ? 'inline-block md:py-5 py-3 active  text-[#ff7223]' :
                    'inline-block md:py-5 py-3'
                  }
                >
                
                {link.name}

               </NavLink>
            </li>
          ))
        }
       
      </ul>
    </nav>
  )
}
