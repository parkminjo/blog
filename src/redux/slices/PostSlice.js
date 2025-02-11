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
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      return state.map((post) => {
        if (post.id === id) {
          return { ...post, title, content };
        } else {
          return post;
        }
      });
    },
  },
});

export const { addPost, removePost, updatePost } = PostSlice.actions;
export default PostSlice.reducer;
