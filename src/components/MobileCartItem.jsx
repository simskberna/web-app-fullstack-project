import React, { useState } from 'react'
import { GET } from '../api/service'
import { AddCartButton } from './AddCartButton'

export const MobileCartItem = ({product}) => {    
    const { quantity, price } = product
    const [image, setImage] = useState('') 
    const [name, setName] = useState('') 
    const details = {
        id: product.productId,
        price: product.price,
        quantity:product.quantity
    }
    let data = GET(`product/${product.productId}`) 

    data.then((res) => {
        setImage(res.images[0])
        setName(res.title)
    }) 
return ( 
    <div className='cart bg-white p-2 my-2 flex flex-col items-center justify-center w-full gap-1'>
        <img className='image max-w-[150px] max-h-[150px]' src={image}></img>
        <span className='name'>{name}</span>
        <span className='price'>{price} $</span>
        <span className='quantity text-white bg-[#1239b8dd] rounded-full flex items-center justify-center p-2 h-[25px] w-[25px]'>{quantity}</span>
        <AddCartButton product={details}/>
    </div> 
  )
}
