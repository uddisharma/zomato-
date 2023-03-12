import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./Slices/navSlice";
export const Store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
