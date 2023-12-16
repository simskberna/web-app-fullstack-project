import React, { useState,useEffect } from 'react'
import { GET } from '../api/service'
import { AddCartButton } from './AddCartButton'
import { RemoveCartButton } from './RemoveCartButton'
import placeHolder from '../assets/placeHolder.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const DesktopCartItem = (props) => {
    const { quantity, price } = props.product
    const [itemQty,setItemQty] = useState(0)
    const [isLoading,setIsLoading] = useState(true)
    const details = {
        id: props.product.productId,
        price: props.product.price,
        quantity: props.product.quantity, 
    }
    const [image, setImage] = useState('') 
    const [name, setName] = useState('') 
    useEffect(() => { 
        setItemQty(quantity)
    },[props.product])
    if (props.product.productId !== null) {
        let data = GET(`product/${props.product.productId}`) 
         
        data.then((res) => {
            if (res.images && res.images.length > 0) {
                setImage(res.images[0])
            }
           
            setName(res.title)
        }).then(() => {setIsLoading(false)})
    }
    const onQuantityChange = (q) => {
        let newQuantity = q+itemQty
        setItemQty(newQuantity)
  }
    
    return ( 
    <div className='cart bg-white p-5 my-2 flex flex-col gap-10'>
            <div className='flex items-center justify-between gap-5'>
            <RemoveCartButton productUpdate={props.productUpdate} productId={details.id} />
                <div className='image-wrapper flex items-center justify-center max-w-[300px] max-h-[150px]'> 
                <LazyLoadImage
                    placeholderSrc={placeHolder}
                    loading='lazy'
                    height={150}
                    effect={isLoading ? 'blur' : ''}
                    width={150} 
                    className={`h-[150px] w-[250px] image object-contain ${!image ? 'opacity-0' : 'opacity-1'}`}
                    src={image}
                />
                </div>
                <span className='name line-clamp-3 w-full'>{name}</span>
                <span className='price w-[150px]'>{price} $</span> 
                <div className='w-full flex items-center justify-between'>
               
               <AddCartButton productUpdate={props.productUpdate} onQuantityChange={onQuantityChange} product={details} />
               <span className='quantity text-white bg-[#7c7c7c80] flex items-center justify-center p-2 h-[25px] w-[25px]'>{itemQty}</span>
              
           </div>
        </div>
           
        </div> 
  )
}
