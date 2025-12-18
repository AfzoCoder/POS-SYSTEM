import { configureStore } from "@reduxjs/toolkit";
import CartSlice from '../Feature/CartSlice.js'

export const store = configureStore({
  reducer: {
    "cart": CartSlice,
  },
});