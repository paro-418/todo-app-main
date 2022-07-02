import themeSlice from "./theme-store";
import taskListSlice from "./todo-store";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { theme: themeSlice, task:taskListSlice.reducer },
});

export default store;
