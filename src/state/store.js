import { configureStore } from '@reduxjs/toolkit'
import  getCartReducer  from './slice/getCart'

export const store = configureStore({
    reducer: {
        getCart:getCartReducer
    },
}); 