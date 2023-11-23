import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {},
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
