import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'    
import { useURLID } from '../helpers/useURLID'
import { GET } from '../api/service' 
import { AddCartButton } from '../components/AddCartButton'
import { Loader } from '../components/Loader'
import { AddedCartPopup } from '../components/AddedCartPopup';

export const ProductDetail = ({ currency }) => {   
  const [detail, setDetail] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isActive,setIsActive] = useState(false)

  const { id } = useURLID();
  let data = GET(`product/${id}`) 
  useEffect(() => {
    data.then((res) => {
      setDetail(res)
    }).then(() => setIsLoading(false))
  }, [data.length]);

  const handleClick = (e) => {
    setTimeout(() => {
      setIsActive(e);
    },500)
 } 

  const { images, category, title, description, price, oldPrice } = detail  
  if (detail) {
    return ( 
      <>
        {isLoading ? <Loader /> : 
          <>
            <AddedCartPopup isActive={isActive} handleClick={handleClick} /> 
          <div className='w-full h-auto flex-grow'>
          <div className='m-5 lg:m-10 w-auto h-auto bg-[#fff]'>
            <div className='upper-product-container w-full h-full gap-[50px] max-[970px]:p-5 p-10 max-[970px]:flex-col flex'>
              <div className='product-left flex-1 flex items-center justify-center'>
                <img className='product-image max-w-full max-h-[300px] lg:m-5' src={ images && images.length > 0 && images[0] }></img>
              </div>
              <div className='product-right flex-1 divide-y '>
                <div className='product-content-top  flex-col justify-start'>
                <Link 
                  className='product-brand py-5 block font-bold uppercase text-sm text-[#808080]' 
                  to={ `/category?id=${category && category.id}`}> 
                    {category && category.name }
                  </Link> 

                  <span className='product-title block font-bold uppercase text-md'>{ title }</span>
                        <div className='prices w-full'>
                        <span className={`${oldPrice ? 'text-[#B40000]' : 'text-black '} pr-5 md:w-[200px] w-full text-2xl product-price font-bold  flot-left`}>{price} {currency}</span>
                    {oldPrice && <span className='w-full product-oldPrice text-[#773636]  line-through  md:w-[200px] font-bold text-md flot-left'>{oldPrice} {currency}</span>} 
                  </div>
                  
                  <p className='product-desc py-5 block text-justify'>{ description }</p>
                </div>
                <div className='left w-full'>
                  <AddCartButton product={detail}  handleClick={handleClick} />
                </div>
              </div>
            </div>
            
          </div>
            </div>
        </>
        }
      </>
    )
  } else {
    return (
      <div className='w-full h-full'>
        <div className='m-5 lg:m-10 w-auto h-auto font-bold text-[#B40000]'>
          NO PRODUCT FOUND :(
        </div>
      </div>
    ) 
  }
}
