import React from 'react'
import { isMobile } from 'react-device-detect'
import InstagramLogo from '../assets/InstagramLogo.png'
import LinkedinLogo from '../assets/LinkedinLogo.png'
import EmailLogo from '../assets/EmailLogo.png'
export const Footer = () => {
    const info = {
      'email' : 'simskberna@gmail.com'
    }
    let style = {}
    let styleMail = {}
    if (isMobile) {
        style = {
            width: '25px',
            height: '25px'
        }
        styleMail = {
            width: '15px',
            height: '15px'
        }
    }

  return (
      <footer className='relative min-[720px]:px-20 min-[720px]:pb-10 min-[720px]:pt-10 w-full max-[720px]:py-[5px] max-[720px]:px-[20px] h-auto bg-black text-white'>
          <div className='flex flex-row justify-between  items-center '>
               <span className='min-[720px]:text-[35px] uppercase font-bold'>
                  ready to
                  <span className='text-[#4021FF] '> save</span> time ? 
              </span>
              <div className='flex flex-row justify-between gap-10 max-[720px]:gap-5'>
                  <img src={InstagramLogo} style={style}></img>
                  <img src={LinkedinLogo}  style={style}></img>
              </div>
          </div>
          <div className='pt-5 flex flex-row justify-between  items-center '>
                
              <div className='flex flex-row gap-5 max-[720px]:gap-2 items-center'>
              <img src={EmailLogo} style={styleMail}></img>    
              <span className='max-[720px]:text-[10px]'> {info.email} </span>
             </div>
                <div className='max-[720px]:text-[10px] flex flex-row gap-10  max-[720px]:gap-2'>
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                </div>
          </div>
      </footer>
  )
}
