import { createSlice } from "@reduxjs/toolkit";
import { addProductToWishListAction, getUserWishListAction, removeFromWishListAction } from "../Network/WishListApi";



export const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishlistData:null,
        loading:false,
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getUserWishListAction.pending,(state,action)=>{
            state.status ="pending"
            state.loading = true
            state.error=null
        })
        .addCase(getUserWishListAction.rejected , (state,action)=>{
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(getUserWishListAction.fulfilled , (state,action)=>{
            state.wishlistData = action.payload
            state.status='success'
            state.loading = false

        })
        .addCase(removeFromWishListAction.pending,(state,action)=>{
            state.status ="pending"
            state.loading = true
            state.error=null
        })
        .addCase(removeFromWishListAction.rejected , (state,action)=>{
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(removeFromWishListAction.fulfilled , (state,action)=>{
            const stateData = JSON.parse(JSON.stringify(state.wishlistData))
            const filterData = stateData.data.filter(
                product => action.payload.data.includes(product.id)
            );
            if(filterData.length>0){
              
                state.wishlistData.data = filterData
                state.wishlistData.count = filterData.length
            }else{
                state.wishlistData = null
            }
            state.status='success'
            state.loading = false

        })
        // add to wishList 
        .addCase(addProductToWishListAction.pending,(state,action)=>{
            state.status ="pending"
            state.loading = true
            state.error=null
        })
        .addCase(addProductToWishListAction.rejected , (state,action)=>{
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(addProductToWishListAction.fulfilled , (state,action)=>{
            console.log(action.payload);
            // state.wishlistData = action.payload
            state.status='success'
            state.loading = false

        })
    }
})