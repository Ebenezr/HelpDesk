import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://127.0.0.1:3000/questions";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async (page = 1, thunkAPI) => {
    try {
      const resp = await axios.get(`${url}?page=${page}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const postQuestions = createAsyncThunk(
  "questions/addnewQuestion",
  async (formData) => {
    try {
  async (formData, thunkAPI) => {
    try {
      const responce = await axios.post(url, formData);
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
      const responce = await axios.get(`${url}/${id}`, formData);
      const responce = await axios.patch(`${url}/${id}`, formData);
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
  isLoading: true,
  error: null,
};

const quetionsSlice = createSlice({
  name: "questions",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getQuestions.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.allquestions = action.payload.questions;
        state.total = action.payload.count;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.isLoading = false;
        // initialState.error = action.error.message;
      });
  },
});

export default quetionsSlice.reducer;
