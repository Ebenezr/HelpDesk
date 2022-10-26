import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../API/axios";

export const getUsers = createAsyncThunk("user/getUser", async (thunkAPI) => {
  try {
    const resp = await Axios.get("/users");
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.message);
  }
});

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (formData, thunkAPI) => {
    try {
      const resp = await Axios.post("/auth/login", formData);
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
      const resp = await Axios.post("/users", formData);
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
      const resp = await Axios.patch(`/users/${id}`, formData);
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
  authenticated: false,
};

//logins user
const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    //logout dispact action
    logOut: (state) => {
      state.authenticated = false;
      localStorage.setItem("user", JSON.stringify({}));
      localStorage.setItem("token", JSON.stringify(""));
      localStorage.setItem("authenticated", JSON.stringify(false));
    },
  },

  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.authenticated = true;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        localStorage.setItem("authenticated", JSON.stringify(true));
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
        state.authenticated = true;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        localStorage.setItem("authenticated", JSON.stringify(true));
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

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
