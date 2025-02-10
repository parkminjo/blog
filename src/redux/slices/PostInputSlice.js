import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  content: "",
};

const PostInputSlice = createSlice({
  name: "postInput",
  initialState,
  reducers: {
    setUserInput: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setUserInput } = PostInputSlice.actions;
export default PostInputSlice.reducer;
