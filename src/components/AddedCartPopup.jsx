import React, { useEffect, useRef, useState } from 'react'

export const AddedCartPopup = (props) => {   
    
    const [barWidth, setBarWidth] = useState(0);  
    useEffect(() => {   
        let intervalId = setInterval(() => {
            if (barWidth >= document.querySelector('.added-to-cart .popup-main').offsetWidth - 35 && props.isActive) {  
                clearInterval(intervalId); 
                setTimeout(() => {setBarWidth(0);},500)
                props.handleClick(false); 
            } else if (barWidth < document.querySelector('.added-to-cart .popup-main').offsetWidth - 35 && props.isActive) {   
                setBarWidth((barWidth) => barWidth + 1);
                document.querySelector('.added-to-cart .bar-inner').style.width = barWidth + 'px'; 
                clearInterval(intervalId); 
            } else { 
                clearInterval(intervalId);  
            } 
        }, 1);  
         
        
       
    }, [props.isActive, barWidth]);
    
     
  return (
      <div className='added-to-cart'> 
          <div id="popup-modal" tabIndex="-1" className={`${props.isActive === false ? 'hidden' : ''} flex bg-[#0000006b] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100%] max-h-full`}>
            <div className="relative w-full max-w-md max-h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] rounded-lg flex justify-center">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[50%] md:w-full">
                      <button type="button" onClick={() => props.handleClick(false)} className="close-popup absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center flex flex-col justify-center items-center popup-main">
                    <svg height="117px" version="1.1" viewBox="0 0 117 117" width="70px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fillRule="nonzero" id="correct"><path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/><path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/></g></g></svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Product added to your cart.</h3>
                          <div className='bar w-full h-[5px] block bg-[#ffffff5c] rounded-[10px] relative'>
                              <div  className={`bar-inner bg-[#17ab13] block absolute h-[5px] rounded-[10px] w-[${barWidth}%]`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
