import { configureStore } from '@reduxjs/toolkit'
import  getCartReducer  from './slice/getCart'
import addToCartReducer from './slice/addToCart'
import removeFromCartReducer from './slice/removeFromCart'
import purchaseReducer from './slice/purchase'
export const store = configureStore({
    reducer: {
        getCart: getCartReducer,
        addToCart: addToCartReducer,
        removeFromCart: removeFromCartReducer,
        purchase:purchaseReducer
    },
}); 