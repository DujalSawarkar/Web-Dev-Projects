import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import CounterSlice from "./Slice/CounterSlice";
export const Store = configureStore({
  reducer: {
    Cart: CartSlice,
    Counter: CounterSlice,
  },
});
