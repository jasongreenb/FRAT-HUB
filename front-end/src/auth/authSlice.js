import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userDetails, thunkAPI) => {
    try {
        const response = await axios.
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
