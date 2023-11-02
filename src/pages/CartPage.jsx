import React, { useState, useEffect } from 'react'
import { CartItem } from '../components/CartItem'
import { GET_CART,ORDER } from '../api/service'
import { Loader } from '../components/Loader'
export const CartPage = () => {
  const [cart, setCart] = useState([])
  const [isCartEmpty, setIsCartEmpty] = useState(false)
  const [isLoading,setIsLoading] = useState(true)
  const [total, setTotal] = useState(0)

  const id = window.localStorage.getItem('userid') || '' 

  useEffect(() => {
    getData()  
  },[])
  
  const getData = () => {   
    let subTotal = 0
    let obj = GET_CART(`user/get/cart/${id}`) 
    obj.then((res) => {   
      if (!res.data.products) { 
        setIsCartEmpty(true) 
      } else { 
        setCart(res.data.products)  
        res.data.products.map((prod) => {
          subTotal +=( prod.price * prod.quantity)
        })   
 
      } 
    }).then(() => { setIsLoading(false);setTotal(subTotal) })
  }
  
  const handlePurchase = () => { 
    ORDER(`user/purchase/${id}`,cart) 
  }
  const productUpdate = () => { 
    getData() 
  } 
  if (!isCartEmpty) {
    return (
      <>
        {isLoading ? <Loader /> : 
          <>
          <div className='flex-grow relative h-full lg:min-h-[1000px] overflow-y-scroll'>
            <div className='cart flex-col'>
              <div className='px-5 md:px-20 py-5 top relative h-full'>
                { 
                  cart.map((product, index) => {  
                    return (
                      <CartItem productUpdate={productUpdate} product={product} key={index} index={index} />
                    )
                  })  
                  } 
              </div> 
            </div>
       
          </div>
           <div className='border-red-500 border-t-2 bottom text-left  px-20 relative bg-[#fff] w-full h-auto'>
           <div className='total text-2xl font-bold uppercase'>Total : { parseFloat(total)?.toFixed(2)} $</div>
              <button
                onClick={() => {handlePurchase()}}
                className='text-white my-2 p-5 w-[200px] bg-[#1239b8dd]'>
                <span className='uppercase font-bold text-2xl'>
                  Purchase
                </span>
              </button>
          </div>
          </>
        }
     
      </>
    )
  } else {
    return (
      <div className='flex-grow'>
        <div className='flex items-center justify-center text-black font-bold text-2xl'>Your cart is empty</div>
       <svg height="500px" viewBox="0 0 32 32" width="100%" xmlns="http://www.w3.org/2000/svg"><title/><g dataname="2" id="_2"><path d="M30,13H21.69L18.38,4.3,16.51,5l3,8h-7.1l3-8L13.63,4.3,10.31,13H2v2H3.13L5,28.14A1,1,0,0,0,6,29H26a1,1,0,0,0,1-.86L28.87,15H30ZM25.13,27H6.87L5.15,15h21.7Z" id="basket_empty_shop_buy"/></g></svg>
      </div>
    )
  }
}
