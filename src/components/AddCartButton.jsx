import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'; 
import { addToCart } from '../state/slice/addToCart'  
export const AddCartButton = (props) => {      
    
    const dispatch = useDispatch();  
    const [qty, setQty] = useState(1)    
    const info = {
        productId: props.product.id,
        price: props.product.price,
        quantity : qty
    } 
    let isProductDetail = false;
    if (document.location.pathname === '/product') {
        isProductDetail = true
    }
    
  
    const onAddToCart = () => {       
        if (info.quantity > 0) {  
            dispatch(addToCart(info))
            setTimeout(() => {
                if (props.onQuantityChange && props.productUpdate)  {
                    props.onQuantityChange(qty)
                    props.productUpdate()  
                } else { 
                    props.handleClick(true)
                }
              
            }, 250)
            
        }
    } 
   
      
  return (
      <div className={`flex gap-2 justify-between items-center w-full my-2 ${isProductDetail ? 'flex-row' : 'flex-col'}`}>
          <div className='shadow-[0_1px_9px_-0px_rgba(139,139,139,139)] text-white gap-10 font-bold flex items-center justify-center qty w-full md:w-[70%] h-[30px]'>
              <div className='inputs-left bg-[#151399] w-full h-full flex items-center justify-center'>
              <span onClick={() => {
                  setQty(qty => qty - 1); 
                  document.querySelector('.qty').value = qty
              }
              } className='decrease cursor-pointer'>-</span>
            
              </div>
              <div className='qty-value'>
                <span className='qty text-black' value={qty} >{ qty}</span>
                <input type="hidden" className='qty-input' value={qty} />
              </div>
              <div className='inputs-right  bg-[#151399] w-full h-full flex items-center justify-center'> 
              <span onClick={() => {
                  setQty(qty => qty + 1); 
                  document.querySelector('.qty').value = qty
              }} className='increase cursor-pointer'>+</span>
             </div>
              
          </div>
          <div className='bottom border-[1px] border-black flex text-[10px] md:text-[12px] items-center gap-2 justify-center w-full md:w-[70%] h-[30px]'>
          <button
                  onClick={() => { onAddToCart(); }}
                  className={`${isProductDetail ?  'bg-black text-white': 'bg-white text-black'} w-full  h-full`}>
             

              Add To Cart
          
              </button> 
              { !isProductDetail && 
                <Link 
                className=' bg-black text-white w-full h-ful flex justify-center items-center h-[30px]'
                onClick={() => {handleProductSelect(product);}}
                to={`/product?id=${props.product.id}`}>
                View
                </Link>
              } 
               
            
          </div>
          
      </div>
  )
}
