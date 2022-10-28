//It was Hard to write So it should be hard to Read!!

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../API/axios";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async (page = 1, thunkAPI) => {
    try {
      const resp = await Axios.get(`/questions/?page=${page}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
export const getQuestion = createAsyncThunk(
  "questions/getQuestion",
  async (id, thunkAPI) => {
    try {
      const resp = await Axios.get(`/questions/${id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const searchQuestions = createAsyncThunk(
  "questions/searchQuestions",
  async (term, thunkAPI) => {
    try {
      const resp = await Axios.get(`/search/${term}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const postQuestions = createAsyncThunk(
  "questions/addnewQuestion",
  async (formData, thunkAPI) => {
    try {
      const responce = await Axios.post("/questions", formData);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const patchQuestions = createAsyncThunk(
  "questions/patchQuestion",
  async (id, formData) => {
    try {
      const responce = await Axios.patch(`/questions/${id}`, formData);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const postBookmark = createAsyncThunk(
  "questions/postBookmark",
  async (formData, thunkAPI) => {
    try {
      const responce = await Axios.post("/bookmarks", formData);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const postSolutions = createAsyncThunk(
  "questions/postSolution",
  async (formData, thunkAPI) => {
    try {
      const responce = await Axios.post("/solutions", formData);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
//initialstate values
const initialState = {
  page: 0,
  total_pages: 0,
  per_page: 0,
  allquestions: [],
  total: 0,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  currentQuestion: {},
};

const quetionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    upvote: (state, payload) => {
      const question = state.allquestions.find(
        (quiz) => quiz.id === payload.id
      );
      question.votes = question.votes + 1;
    },
    downvote: (state, payload) => {
      const question = state.allquestions.find(
        (quiz) => quiz.id === payload.id
      );
      question.votes = question.votes - 1;
    },
    get_current_quiz: (state, { payload }) => {
      currentQuestion: payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getQuestions.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.isSuccess = true;
        //reset issucces status

        state.allquestions = action.payload.questions;
        state.total = action.payload.count;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        //reset state

        // initialState.error = action.error.message;
      })
      .addCase(getQuestion.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.isSuccess = true;
        state.currentQuestion = action.payload;
        localStorage.setItem("quiz", JSON.stringify(action.payload));
        //reset issucces status
      })
      .addCase(getQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        //reset state

        // initialState.error = action.error.message;
      })
      .addCase(searchQuestions.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(searchQuestions.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.isSuccess = true;
        //reset issucces status

        state.allquestions = action.payload.questions;
        state.total = action.payload.count;
      })
      .addCase(searchQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        //reset state

        // initialState.error = action.error.message;
      })
      .addCase(postBookmark.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(postBookmark.fulfilled, (state, action) => {
        // console.log(action);
        state.isSuccess = true;
        state.isLoading = false;
        //reset issucces status

        //state.allquestions = action.payload.questions;
        state.total = action.payload.count;
      })
      .addCase(postBookmark.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        //reset state

        // initialState.error = action.error.message;
      })
      .addCase(postSolutions.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(postSolutions.fulfilled, (state, action) => {
        // console.log(action);
        state.isSuccess = true;
        state.isLoading = false;
        //reset issucces status

        //state.allquestions = action.payload.questions;
        //state.total = action.payload.count;
      })
      .addCase(postSolutions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        //reset state

        // initialState.error = action.error.message;
      });
  },
});

export const { upvote, downvote } = quetionsSlice.actions;

export default quetionsSlice.reducer;
