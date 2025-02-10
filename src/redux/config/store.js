import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../slices/PostSlice";
import PostInputReducer from "../slices/PostInputSlice";

export const store = configureStore({
  reducer: {
    post: PostReducer,
    postInput: PostInputReducer,
  },
});
