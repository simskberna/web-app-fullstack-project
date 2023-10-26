import React from 'react'
import { REMOVE_CART } from '../api/service'
export const RemoveCartButton = ({ productId }) => {
    const userid = window.localStorage.getItem('userid') || ''
    const removeFromCart = () => {
        REMOVE_CART(`user/remove/cart/product/${userid}/${productId}`)
    }
    return (
      
    <div
        onClick={() => {removeFromCart()}}      
        className='cursor-pointer bg-[#d31111] text-white rounded-full w-[50px] h-[25px] flex items-center justify-center'>
        X
    </div>
  )
}
