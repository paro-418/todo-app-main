import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { light: true },
  reducers: {
    toggleTheme(state) {
      // not changing original state. IMMER is taking care of such code snippets
      state.light = !state.light;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
