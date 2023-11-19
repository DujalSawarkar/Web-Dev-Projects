import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state , action) => {
      state.filter(post => post.id !== action.payload)
    },
  },
});
export const { add, remove } = Slice.actions;
export default Slice.reducer;
