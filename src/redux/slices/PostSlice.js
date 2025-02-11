import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("postList")) ?? [];

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    removePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, removePost } = PostSlice.actions;
export default PostSlice.reducer;
