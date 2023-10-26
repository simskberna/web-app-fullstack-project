import React, { useEffect, useState } from 'react' 
import { isMobile } from 'react-device-detect'
import { MobileCartItem } from './MobileCartItem'
import { DesktopCartItem } from './DesktopCartItem'

export const CartItem = ({ product,index }) => { 
    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(product)
    },[])  
    
    return (
        <div key={index}>
        { isMobile ? <MobileCartItem product={cart} /> :
            <DesktopCartItem product={cart} />}
        </div>
   )
}
