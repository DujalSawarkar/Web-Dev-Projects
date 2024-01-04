import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    remove: (state, action) => {
      return state.filter((post) => post._id !== action.payload);
    },
    add: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
