import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "./axiosClient";


export const getUserWishListAction = createAsyncThunk("user/wishlist/get", async(_,{rejectWithValue})=>{

    try{
        const userToken = localStorage.getItem("token")?.trim();
        console.log(userToken);
        const response = await axiosClient.get(`/wishlist`, {
            headers: {
              token: userToken,
            },
 
          });
   
        return response.data
    }
    catch(err){
     
        return rejectWithValue(err?.response?.data?.message)
    }
})
export const removeFromWishListAction = createAsyncThunk("user/wishList/remove", async(productId,{rejectWithValue})=>{

    try{
        const userToken = localStorage.getItem("token")
        const response = await axiosClient.delete(`/wishlist/${productId}`, {
            headers: {
              token: userToken,
            },
          });
        return response.data
    }
    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
})
export const addProductToWishListAction = createAsyncThunk("user/wishList/add", async(productId,{rejectWithValue})=>{

    try{
        const userToken = localStorage.getItem("token")
        const response = await axiosClient.post(`/wishlist`, 
        {
            productId:productId
        }
        ,{
            headers: {
              token: userToken,
            },
          });
        return response.data
    }
    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
})