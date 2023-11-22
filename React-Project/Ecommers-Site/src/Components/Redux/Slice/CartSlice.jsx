import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {},
  },
});

export const { add, remove } = CartSlice.actions;
export default cartSlice.reducer;
