import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosClient from "./axiosClient";
import toast from "react-hot-toast";


export const LoginAction = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
    const loadingId = toast.loading("Waiting....")
    try {
        const response = await axiosClient.post("/auth/signin", userData)

        return response.data
    }
    catch (err) {
        return rejectWithValue(err?.response?.data?.message)
    }
    finally {
        toast.dismiss(loadingId)
    }
})

export const RegisterAction = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
    const loadingId = toast.loading("Waiting....")
    try {
        const response = await axiosClient.post("/auth/signup", userData)

        return response.data
    }
    catch (err) {
        return rejectWithValue(err?.response?.data?.message)
    }
    finally {
        toast.dismiss(loadingId)
    }
})