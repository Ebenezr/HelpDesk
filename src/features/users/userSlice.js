//It was Hard to write So it should be hard to Read!!
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../API/axios";

//logged user info
const loggedUser = JSON.parse(localStorage.getItem("user") || "{}");
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (formData, thunkAPI) => {
    try {
      const resp = await Axios.post("/auth/login", formData);
      return resp.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//RESET USER PASSWORD

export const resetUserPass = createAsyncThunk(
  "user/resetUserPass",
  async (formData, thunkAPI) => {
    const { email } = formData;
    try {
      const resp = await Axios.patch(`/passwordreset/email=${email}`, formData);
      return resp.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
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
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (formData, thunkAPI) => {
    const { id } = formData;
    try {
      const resp = await Axios.patch(`/users/${id}`, formData);
      return resp.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get current user bookmarks
export const getUserBookmarks = createAsyncThunk(
  "user/getUserBookmarks",
  async ({ id, thunkAPI }) => {
    try {
      const resp = await Axios.get(`/mybookmarks/${id}`);
      return resp.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//Delete a bookmark
export const DeleteBookmark = createAsyncThunk(
  "user/DeleteBookmark",
  async ({ id, thunkAPI }) => {
    try {
      const resp = await Axios.get(`/bookmarks/${id}`);
      return resp.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//get currentusers solutions
export const getUserSolutions = createAsyncThunk(
  "user/getUserSolutions",
  async ({ id, thunkAPI }) => {
    try {
      const resp = await Axios.get(`/mysolutions/${id}`);
      return resp.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//update seleted solution
export const DeleteSolution = createAsyncThunk(
  "user/DeleteSolution",
  async ({ id, thunkAPI }) => {
    try {
      const resp = await Axios.get(`/solutions/${id}`);
      return resp.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//get current user questions
export const getUserQuestions = createAsyncThunk(
  "user/getUserQuestions",
  async ({ id, thunkAPI }) => {
    try {
      const resp = await Axios.get(`/myquestions/${id}`);
      return resp.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//Delete user questions
export const DeleteQuestion = createAsyncThunk(
  "user/DeleteQuestion",
  async ({ id, thunkAPI }) => {
    try {
      const resp = await Axios.get(`/questions/${id}`);
      return resp.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
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
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  authenticated: null,
};

//logins user
const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
    },
    //logout dispact action
    logOut: (state) => {
      state.isSuccess = false;
      state.user = {};
      state.bookmarks = [];
      state.questions = [];
      state.solutions = [];
      state.authenticated = null;
      state.token = "";
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
        state.isSuccess = true;
        state.authenticated = true;

        //reset issucces status
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        localStorage.setItem("authenticated", JSON.stringify(true));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;

        // initialState.error = action.error.message;
      })
      .addCase(registerUser.pending, (state, action) => {
        //user registration
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isSuccess = true;
        state.authenticated = true;
        //reset issucces status

        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        localStorage.setItem("authenticated", JSON.stringify(true));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;

        // initialState.error = action.error.message;
      })
      .addCase(updateUser.pending, (state, action) => {
        //user mod
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        //reset issucces status
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;

        // initialState.error = action.error.message;
      })
      .addCase(getUserBookmarks.pending, (state, action) => {
        //user mod
        state.isLoading = true;
      })
      .addCase(getUserBookmarks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        //reset issucces status

        state.bookmarks = action.payload;
      })
      .addCase(getUserBookmarks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;

        // initialState.error = action.error.message;
      })
      .addCase(getUserSolutions.pending, (state, action) => {
        //user mod
        state.isLoading = true;
      })
      .addCase(getUserSolutions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        //reset issucces status
        state.solutions = action.payload;
      })
      .addCase(getUserSolutions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;

        state.message = action.payload;

        // initialState.error = action.error.message;
      })
      .addCase(getUserQuestions.pending, (state, action) => {
        //user mod
        state.isLoading = true;
      })
      .addCase(getUserQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        //reset issucces status

        state.questions = action.payload;
      })
      .addCase(getUserQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;

        // initialState.error = action.error.message;
      })
      .addCase(resetUserPass.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(resetUserPass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(resetUserPass.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(DeleteBookmark.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(DeleteBookmark.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(DeleteBookmark.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(DeleteSolution.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(DeleteSolution.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(DeleteSolution.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(DeleteQuestion.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(DeleteQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(DeleteQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      });
  },
});

export const { logOut, reset } = userSlice.actions;
export default userSlice.reducer;
