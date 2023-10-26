import React from 'react' 
import { Hero } from '../components/Hero'  
import { isMobile } from 'react-device-detect'
import ContentSrc from '../assets/ContentImage.png'

import VerticalLine from '../assets/TitleAsset.png'
export const HomePage = () => {
  let style = {}
  if (isMobile) {
    style = {
       display:'none'
     }
   }
  return (
    <> 
      <Hero />  

      <div className='min-[720px]:px-20 max-[720px]:px-8 max-[720px]:py-28 px:5 max-[920px]:mb-[50px] min-[720px]:mt-[50px] flex flex-row justify-between items-center gap-10 w-full h-auto'>
          <img className='w-[250px] h-[250px]' style={style}  src={ContentSrc}></img>
          <div className='flex flex-col justify-center'>
            <span className='flex flex-row items-center gap-5 text-[35px] uppercase font-bold'>
              <img src={VerticalLine}></img>
              use the latest technologies
            </span>
                  <p className='text-[#616161] text-justify'>
                    Lorem ipsum dolor sit amet consectetur,ante quisque dui rutrum neque facilisis, proin natoque diam integer ornare quam mauris torquent, magnis placerat sociosqu vestibulum ullamcorper phasellus aenean, magnis placerat sociosqu vestibulum ullamcorper phasellus aenean
                    vestibulum ullamcorper phasellus aenean, magnis placerat sociosqu vestibulum ullamcorper phasellus aenea
                    vestibulum ullamcorper phasellus aenean, magnis placerat sociosqu vestibulum ullamcorper phasellus aenean ullamcorper phasellus aenean.
                  </p>
          </div>
      </div> 
    </>
  )
}
