import { createSlice } from "@reduxjs/toolkit";
import { GetCategoriesAction } from "../Network/ProductsApi";


export const categoriesSlice= createSlice({
    name:"categories",
    initialState:{
        categoriesData:null,
        loading:false,
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(GetCategoriesAction.pending,(state,action)=>{
            state.status ="pending"
            state.loading = true
            state.error=null
        })
        .addCase(GetCategoriesAction.rejected , (state,action)=>{
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(GetCategoriesAction.fulfilled , (state,action)=>{
            console.log(action.payload);
            state.categoriesData = action.payload.data
            state.status='success'
            state.loading = false

        })
    }
})