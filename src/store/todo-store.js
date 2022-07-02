import { createSlice } from "@reduxjs/toolkit";

const initialState = { todoArray: [] };

const taskListSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      state.todoArray.push(action.payload);
    },
    removeTask(state, action) {
      const newInitialState = state.todoArray.filter(
        (task) => task.id !== action.payload
      );
      state.todoArray = newInitialState;
    },
  },
});

export const taskListSliceActions = taskListSlice.actions;
export default taskListSlice;
