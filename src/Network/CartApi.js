import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "./axiosClient";
export const getUserCartAction = createAsyncThunk("user/cart/get", async(_,{rejectWithValue})=>{

    try{
        const userToken = localStorage.getItem("token")?.trim();
        console.log(userToken);
        const response = await axiosClient.get(`/cart`, {
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
export const removeFromCartAction = createAsyncThunk("user/cart/remove", async(productId,{rejectWithValue})=>{

    try{
        const userToken = localStorage.getItem("token")
        const response = await axiosClient.delete(`/cart/${productId}`, {
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
export const addProductToCartAction = createAsyncThunk("user/cart/add", async(productId,{rejectWithValue})=>{

    try{
        const userToken = localStorage.getItem("token")
        const response = await axiosClient.post(`/cart`, 
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
export const clearCartAction = createAsyncThunk("user/cart/clear", async(productId,{rejectWithValue})=>{

    try{
        const userToken = localStorage.getItem("token")
        const response = await axiosClient.delete(`/cart`, 
          {
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