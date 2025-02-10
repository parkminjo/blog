import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../slices/PostSlice";

export const store = configureStore({
  reducer: {
    post: PostReducer,
  },
});
