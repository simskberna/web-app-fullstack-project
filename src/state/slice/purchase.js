import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ORDER } from "../../api/service";

export const purchase = createAsyncThunk('purchase', async (obj) => {
    const {id,cart} = obj
    const response = await ORDER(`user/purchase/${id}`, cart) 
    return response?.orderId
})
const purchaseSlice = createSlice({
    name: "purchase",
    initialState: {
        isLoading: false,
        data: null,
        isError: false, 
    },
    extraReducers: (builder) => {
        builder.addCase(purchase.pending, (state, action) => { 
            state.isLoading = true  
        })
        builder.addCase(purchase.fulfilled, (state, action) => { 
            state.isLoading = false
        });
        builder.addCase(purchase.rejected, (state, action) => {
            console.log('Error: ', action.payload);
            state.isError = true; 
        })
       
    }
})

export default purchaseSlice.reducer;