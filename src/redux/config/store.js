import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../slices/PostSlice";
import PostInputReducer from "../slices/PostInputSlice";

export const store = configureStore({
  reducer: {
    postList: PostReducer,
    postInput: PostInputReducer,
  },
});
