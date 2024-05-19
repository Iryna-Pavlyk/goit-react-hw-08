import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// @POST /users/signup (register)
export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("users/signup", userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// @POST /users/login (log in)
export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("users/login", userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//@POST /users/logout (log out)
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("users/logout");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//@GET (refresh)
