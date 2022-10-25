import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://127.0.0.1:3000/users";
export const getUsers = createAsyncThunk("user/getUser", async (thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.message);
  }
});

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (formData, thunkAPI) => {
    try {
      const resp = await axios.post(url, formData);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formData, thunkAPI) => {
    try {
      const resp = await axios.post(url, formData);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/patchUser",
  async (id, formData, thunkAPI) => {
    try {
      const resp = await axios.patch(`${url}/${id}`, formData);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

const initialState = {
  user: {},
  isLoading: true,
  error: null,
  bookmarks: [],
  questions: [],
  solutions: [],
  token: "",
  isLoading: true,
};

//logins user
const userSlice = createSlice({
  name: "login",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        // initialState.error = action.error.message;
      })
      .addCase(registerUser.pending, (state, action) => {
        //user registration
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        // initialState.error = action.error.message;
      })
      .addCase(updateUser.pending, (state, action) => {
        //user mod
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        // initialState.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
