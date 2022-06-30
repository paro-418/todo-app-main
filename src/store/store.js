import themeSlice from "./theme-store";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { theme: themeSlice },
});

export default store;
