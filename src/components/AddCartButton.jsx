import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../state/slice/addToCart'
export const AddCartButton = (props) => { 
    const dispatch = useDispatch(); 
    const [qty, setQty] = useState(1)  
    const info = {
        productId: props.product.id,
        price: props.product.price,
        quantity : qty
    }
 
      
    const onAddToCart = () => {       
        if (info.quantity > 0) {  
            dispatch(addToCart(info))
            setTimeout(() => {
                props.onQuantityChange(qty)
                props.productUpdate()  
            },250)
        }
    }
   
      
  return (
      <div className='flex gap-2 justify-between items-center w-full my-2 md:flex-row flex-col'>
          <button
              onClick={() => { onAddToCart();}}
              className='shadow-lg shadow-[#949494] bg-[#151399] text-white font-bold rounded-[3px] min-w-[720px]:p-2 p-[2px] h-[45px] min-w-[720px]:w-[200px] min-w-[720px]:mb-0 mb-2 w-[100px]'>
             

              Add To Cart
          
          </button>
          <div className='shadow-lg shadow-[#949494] text-white gap-5 font-bold flex items-center justify-center qty rounded-full bg-[#c5c5c5] w-[100px] h-[45px]'>
              <span onClick={() => {
                  setQty(qty => qty - 1); 
                  document.querySelector('.qty').value = qty
              }
              } className='decrease cursor-pointer'>-</span>
             <input  type="hidden" className='qty-input' value={qty} />
              <span className='qty' value={qty} >{ qty}</span>
              <span onClick={() => {
                  setQty(qty => qty + 1); 
                  document.querySelector('.qty').value = qty
              }} className='increase cursor-pointer'>+</span>
              
          </div>
      </div>
  )
}
