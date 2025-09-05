import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosClient from "./axiosClient";

export const GetAllProductsAction = createAsyncThunk(
  "products",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get("products", { params });
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);
export const GetProductDetailsAction = createAsyncThunk(
  "products/getDetails",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get(`/products/${productId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);
export const GetCategoriesAction = createAsyncThunk(
  "categories/get",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get(`categories`, { params });
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);
