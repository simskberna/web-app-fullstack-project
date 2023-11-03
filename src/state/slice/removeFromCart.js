import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REMOVE_CART } from "../../api/service";

export const removeFromCart = createAsyncThunk('removeFromCart', async (obj) => { 
    const {userid, productId} =  obj  
    const response = await REMOVE_CART(`user/remove/cart/product/${userid}/${productId}`)  
    return response.message
})
const removeFromCartSlice = createSlice({
    name: "removeFromCart",
    initialState: {
        isLoading:false,
        data: null,
        isError : false
    },
    extraReducers: (builder) => {
        builder.addCase(removeFromCart.pending, (state, action) => { 
            state.isLoading = true  
        })
        builder.addCase(removeFromCart.fulfilled, (state, action) => { 
            state.isLoading = false,
            state.data = action.payload   
        });
        builder.addCase(removeFromCart.rejected, (state, action) => {
            console.log('Error: ', action.payload);
            state.isError = true; 
        })
       
    }

    
})
export default removeFromCartSlice.reducer;