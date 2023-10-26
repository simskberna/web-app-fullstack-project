import React from 'react'  
import { isMobile } from 'react-device-detect'

import HeaderImageDesktop from '../assets/HeaderImage.png'
import HeaderImageMobile from '../assets/HeaderImageMobile.png'
import SmartLogo from '../assets/SmartLogo.png'
import EasyLogo from '../assets/EasyLogo.png'
import QuickLogo from  '../assets/QuickLogo.png'
export const Hero = () => {
  const logosAndTitles = [
    {
      'src': SmartLogo,
      'title' : 'SMART'
    },
    {
      'src': EasyLogo,
      'title' : 'EASY'
    },
    {
      'src': QuickLogo,
      'title' : 'QUICK'
    }
  ]
  const setImage = () => {
    if (isMobile) {
      return HeaderImageMobile
    } else {
      return HeaderImageDesktop
    }
  }
  return (
    <div className="Header uppercase h-auto w-full bg-contain bg-center bg-no-repeat relative" > 
      <img className='object-fill w-full min-[720px]:h-[350px] absolute' src={setImage()} />
      <div className='w-full h-auto min-[720px]:pb-20 min-[720px]:pl-20 min-[720px]:pr-20 min-[720px]:pt-5  max-[720px]:p-5'>
        
        <div className='text-[80px]  min-[720px]:mb-[60px] max-[480px]:text-[27px] leading-10  max-[1300px]:text-[60px] max-[1300px]:leading-[2.5rem] min-[720px]:leading-[4.5rem] uppercase font-bold text-[#fff] min-[720px]:w-[350px]  w-[200px] relative'>
          Use
          The Latest
          <span className='block text-[80px]  max-[480px]:text-[27px] max-[1300px]:text-[60px] max-[1300px]:leading-[3.5rem] leading-10  min-[720px]:leading-[4.5rem] uppercase font-bold min-[720px]:w-[350px]  w-[200px] relative text-[#4021FF]'>Technologies</span>
        </div>
        <div className='bottom-[20px] max-[720px]:hidden w-[450px] bg-[#ffffff] relative m-auto shadow-lg shadow-[#6f59fa70] flex flex-row justify-center items-center'>
          <ul className='flex flex-row gap-10 justify-center items-center p-5'>
            {
              logosAndTitles.map((item,index) => {
                return (
                  <li key={ index } className='cursor-pointer text-center'>
                    <img src={item.src}></img>
                    <span className='font-bold text-[#4021FF]'>{item.title}</span> 
                  </li>
                 )
              })
            }
            
          </ul>
        </div>
      </div>
    </div>
  )
}