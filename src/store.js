//redux toolkit store
import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./features/questions/questionSlice";
export const store = configureStore({
  reducer: {
    questions: questionReducer,
  },
});
