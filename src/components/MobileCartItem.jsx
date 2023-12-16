import React, { useState,useEffect } from 'react'
import { GET } from '../api/service'
import { AddCartButton } from './AddCartButton'
import { RemoveCartButton } from './RemoveCartButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeHolder from '../assets/placeHolder.png'

export const MobileCartItem = (props) => {   
    const [isLoading, setIsLoading] = useState(true)
    const [itemQty,setItemQty] = useState(0)
    const { quantity, price } = props.product
    const [image, setImage] = useState('') 
    const [name, setName] = useState('') 
    const details = {
        id: props.product.productId,
        price: props.product.price,
        quantity:props.product.quantity
    }
    let data = GET(`product/${props.product.productId}`) 
    useEffect(() => { 
        setItemQty(quantity)
    },[props.product])
    data.then((res) => {
        if (res.images && res.images.length > 0) {
            setImage(res.images[0])
        }  
       
        setName(res.title)
    }).then(() => { setIsLoading(false) })

    const onQuantityChange = (q) => {
        let newQuantity = q+itemQty
        setItemQty(newQuantity)
    } 
return ( 
    <div className='cart bg-white p-2 my-2 flex flex-col items-center justify-center w-full gap-1'>
        <div className='remove flex items-center justify-start w-full'>
           <RemoveCartButton productUpdate={props.productUpdate} productId={details.id} />
        </div>
        <LazyLoadImage
                    placeholderSrc={placeHolder}
                    loading='lazy'
                    height={150}
                    effect={isLoading ? 'blur' : ''}
                    width={150} 
                    className={`image max-w-[150px] max-h-[150px] ${!image ? 'opacity-0' : 'opacity-1'}`}
                    src={image}
                /> 
        <span className='name'>{name}</span>
        <span className='price'>{price} $</span> 
        <span className='quantity text-white bg-[#7c7c7c80] flex items-center justify-center p-2 h-[25px] w-[25px]'>{itemQty}</span>  
        <div className='w-[70%]'>
           <AddCartButton productUpdate={props.productUpdate} onQuantityChange={onQuantityChange} product={details} />
        </div>
    </div> 
  )
}
