import React, { useEffect, useState } from 'react' 
import { isMobile } from 'react-device-detect'
import { MobileCartItem } from './MobileCartItem'
import { DesktopCartItem } from './DesktopCartItem'

export const CartItem = (props) => {  
    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(props.product)
    },[])  
    
    return (
        <div key={props.index}>
            {isMobile ? <MobileCartItem productUpdate={props.productUpdate} product={cart} /> :
            <DesktopCartItem productUpdate={props.productUpdate} product={cart} />}
        </div>
   )
}
