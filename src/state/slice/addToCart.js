import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADD_CART } from "../../api/service";


export const addToCart = createAsyncThunk('addToCart', async (info) => {
    const response = await ADD_CART(`user/add/cart/${window.localStorage.getItem('userid')}`, info) 
     return response.data
})
const addToCartSlice = createSlice({
    name: "addToCart",
    initialState: {
        isLoading: false,
        data: null,
        isError: false, 
    },
    extraReducers: (builder) => {
        builder.addCase(addToCart.pending, (state, action) => { 
            state.isLoading = true  
        })
        builder.addCase(addToCart.fulfilled, (state, action) => { 
            state.isLoading = false,
            state.data = action.payload   
        });
        builder.addCase(addToCart.rejected, (state, action) => {
            console.log('Error: ', action.payload);
            state.isError = true; 
        })
       
    }
})

export default addToCartSlice.reducer;