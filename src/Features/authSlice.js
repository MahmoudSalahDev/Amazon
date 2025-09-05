import { createSlice } from "@reduxjs/toolkit";
import { LoginAction, RegisterAction } from "../Network/AuthApi";

export const authSlice = createSlice({
  name: "userInfo",
  initialState: {
    userData: null,
    loading: false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterAction.pending, (state, action) => {
        state.status = "pending";
        state.loading = true;
        state.error = null;
      })
      .addCase(RegisterAction.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
        state.loading = false;
      })
      .addCase(RegisterAction.fulfilled, (state, action) => {
        // state.userData = action.payload.user
        state.status = "success";
        state.loading = false;
      })

      .addCase(LoginAction.pending, (state, action) => {
        state.status = "pending";
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginAction.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
        state.loading = false;
      })
      .addCase(LoginAction.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        localStorage.setItem("token", token);
        state.userData = user;
        state.status = "success";
        state.loading = false;
      });
  },
});

// Ahmedahmed1!
