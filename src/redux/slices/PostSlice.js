import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    removePost: () => {},
  },
});

export const { addPost, removePost } = PostSlice.actions;
export default PostSlice.reducer;
