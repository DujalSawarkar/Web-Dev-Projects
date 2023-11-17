import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice/Slice";
export const Store = configureStore({
  reducer: {
    cart: Slice,
  },
});
