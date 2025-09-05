import { createSlice } from "@reduxjs/toolkit";
import { addProductToCartAction, clearCartAction, getUserCartAction, removeFromCartAction } from "../Network/CartApi";

export const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cartData:null,
        loading:false,
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getUserCartAction.pending,(state,action)=>{
            state.status ="pending"
            state.loading = true
            state.error=null
        })
        .addCase(getUserCartAction.rejected , (state,action)=>{
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(getUserCartAction.fulfilled , (state,action)=>{
            console.log(action.payload);
            state.cartData = action.payload
            state.status='success'
            state.loading = false

        })
        .addCase(removeFromCartAction.pending,(state,action)=>{
            state.status ="pending"
            state.loading = true
            state.error=null
        })
        .addCase(removeFromCartAction.rejected , (state,action)=>{
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(removeFromCartAction.fulfilled , (state,action)=>{
            console.log(action.payload);
            state.cartData = action.payload
            state.status='success'
            state.loading = false

        })
        .addCase(addProductToCartAction.pending,(state,action)=>{
            state.status ="pending"
            state.loading = true
            state.error=null
        })
        .addCase(addProductToCartAction.rejected , (state,action)=>{
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(addProductToCartAction.fulfilled , (state,action)=>{
            console.log(action.payload, 'payload');
            state.cartData = action.payload
            state.status='success'
            state.loading = false

        })
        .addCase(clearCartAction.pending,(state,action)=>{
            state.status ="pending"
            state.loading = true
            state.error=null
        })
        .addCase(clearCartAction.rejected , (state,action)=>{
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(clearCartAction.fulfilled , (state,action)=>{
            console.log(action.payload);
            state.cartData = null
            state.status='success'
            state.loading = false

        })
    }
})