import React from 'react'
import { REMOVE_CART } from '../api/service'
export const RemoveCartButton = (props) => {
    const userid = window.localStorage.getItem('userid') || ''
    const removeFromCart = () => {  
        const removed = REMOVE_CART(`user/remove/cart/product/${userid}/${props.productId}`) 
        removed.then((res) => {
            if (res) { 
                props.productUpdate()
            }
        }).catch(err => console.log(err))
    }
    return (
      
    <div
        onClick={() => {removeFromCart()}}      
        className='cursor-pointer bg-[#d31111] text-white rounded-full md:w-[50px] md:h-[25px] w-[27px] h-[27px] flex items-center justify-center'>
        X
    </div>
  )
}
