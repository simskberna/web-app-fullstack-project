import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_CART } from "../../api/service";


export const getCart = createAsyncThunk('getCart', async (id) => {
    const response = await GET_CART(`user/get/cart/${id}`)
     return response.data
})
const getCartSlice = createSlice({
    name: "getCart",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        isEmpty : false
    },
    extraReducers: (builder) => {
        builder.addCase(getCart.pending, (state, action) => {
            console.log('pendind: ', action.payload);
            state.isLoading = true  
        })
        builder.addCase(getCart.fulfilled, (state, action) => { 
            state.isLoading = false,
            state.data = action.payload  
            if (!state.data?.products) {
                state.isEmpty = true 
            }
           
        });
        builder.addCase(getCart.rejected, (state, action) => {
            console.log('Error: ', action.payload);
            state.isError = true; 
        })
       
    }
})

export default getCartSlice.reducer;