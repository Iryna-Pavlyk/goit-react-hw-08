import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: null,
    isRefreshing: false,
  },
  // extraReducers: (builder) => builder.addCase(),
});

export default authSlice.reducer;
