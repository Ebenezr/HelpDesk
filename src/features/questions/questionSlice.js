import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://127.0.0.1:3000/questions";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

//initialstate values
const initialState = {
  allquestions: [],
  isLoading: true,
};

const quetionsSlice = createSlice({
  name: "questions",
  initialState,
  extraReducers: {
    [getQuestions.pending]: (state) => {
      state.isLoading = true;
    },
    [getQuestions.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.allquestions = action.payload;
      //   state.votes = action.payload.votes;
    },
    [getQuestions.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default quetionsSlice.reducer;
