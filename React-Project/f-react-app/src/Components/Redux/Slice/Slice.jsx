import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {},
  },
});
export const { add, remove } = Slice.actions;
export default Slice.reducer;
