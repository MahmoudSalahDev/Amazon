import { createSlice } from "@reduxjs/toolkit";
import { GetAllProductsAction } from "../Network/ProductsApi";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsData: null,
    loading: false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllProductsAction.pending, (state, action) => {
        state.status = "pending";
        state.loading = true;
        state.error = null;
      })
      .addCase(GetAllProductsAction.rejected, (state, action) => {
        console.log(action.payload, "action");
        state.error = action.payload;
        state.status = "rejected";
        state.loading = false;
      })
      .addCase(GetAllProductsAction.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.status = "success";
        state.loading = false;
      });
  },
});
