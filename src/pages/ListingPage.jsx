import React, { useEffect, useState } from 'react' 
import { GET } from '../api/service.js' 
import { Link } from 'react-router-dom'; 
import { useURLID } from '../action-creators/useURLID.js';
import { AddCartButton } from '../components/AddCartButton.jsx';
import { Loader } from '../components/Loader.jsx';
export const ListingPage = ({ currency,handleProductSelect}) => {   
  const [products, setProducts] = useState([])  
  const [isLoading,setIsLoading] = useState(true)
  const [currentCategory, setCurrentCategory] = useState([])  
  const upArrow = (
    <svg className="feather feather-arrow-down" fill="none" height="24" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
  )
  const { id } = useURLID(); 
  let data = GET(`categoryProducts/${id}`)  
  useEffect(() => {  
    data.then((res) => {
      if (res.status && res.status === 200) {
        setCurrentCategory(res.data.categoryName)
        setProducts(res.data.products)
      } else {
        setProducts([])
      }
      
    }).then(() => setIsLoading(false))
  }, [data.length])  
   
  return (
    <>
      {isLoading ? <Loader /> : 
    
      <>
      <div className='category-list w-auto mx-5 lg:mx-10 font-bold py-2 border-b-2 lg:text-[30px] border-[#000] lg:py-5'>{currentCategory}</div>
      <div className='h-auto relative grid gap-4 lg:grid-cols-4 grid-cols-2 m-5 lg:m-10'>
        {
          products.map((product, index) => {
            let { title, price, images, oldPrice, id } = product  
            {
              return (
                
                <div key={index} className='item w-full max-w-sm bg-white drop-shadow-lg rounded-[4px]'>
                    <Link 
                        onClick={() => {handleProductSelect(product)}}
                        to={`/product?id=${id}`}
                        key={index}
                        className='p-4'>
                          <img className="p-4 rounded-t-lg h-[150px] md:h-[300px] w-full" src={ images[0] } alt={ title } />
                    </Link>  
                    <div className="px-5 pb-5"> 
                        <h5 className="text-4 font-semibold tracking-tight text-black h-[50px] line-clamp-2">{ title }</h5>  
                          <div className='flex gap-2 text-[12px] md:text-[20px]'>
                            {oldPrice && <span className='absolute flex items-center justify-center top-0 left-0 bg-[#B40000] w-[70px] h-[35px] text-white text-sm p-2 rounded-tl-[4px] rounded-br-[4px]'>%{ parseFloat(100*(oldPrice-price)/oldPrice).toFixed(0)}{upArrow}</span>}
                            
                          <p className={`text-2 font-bold ${oldPrice ? 'text-[#00D849]' : 'text-black'}`}>{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} {currency}</p> 
                        
                            {oldPrice && <p className={`text-2 font-bold text-[#B40000] line-through`}>{oldPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} {currency}</p>}
                          </div>
                          
                    <AddCartButton key={index} product={ product} />
                      </div>
                    </div> 
              )
                  }
            
          })
        } 
      </div>
      </>
    }
    </>
  )
} 