//redux toolkit store
import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./features/questions/questionSlice";
import userReducer from "./features/users/userSlice";
export const store = configureStore({
  reducer: {
    questions: questionReducer,
    user: userReducer,
  },
});
