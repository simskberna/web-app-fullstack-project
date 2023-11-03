import React from 'react' 
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../state/slice/removeFromCart'
export const RemoveCartButton = (props) => {
    const dispatch = useDispatch(); 
    const userid = window.localStorage.getItem('userid') || '' 
    const removeItem = () => {   
        const obj = {
            userid,
            productId : props.productId
        }
        dispatch(removeFromCart(obj)) 
        setTimeout(() => {props.productUpdate()},1000)
    }
    return (
      
    <div
        onClick={() => {removeItem()}}      
        className='cursor-pointer bg-[#d31111] text-white rounded-full md:w-[50px] md:h-[25px] w-[27px] h-[27px] flex items-center justify-center'>
        X
    </div>
  )
}
