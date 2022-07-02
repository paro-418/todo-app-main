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
      state.todoArray = state.todoArray.filter(
        (obj) => obj.id + "IMG" !== action.payload
      );
    },
    markComplete(state, action) {
      state.todoArray.forEach( obj => {
        if( obj.id === action.payload)
          obj.completed = !obj.completed;
      })
    },
  },
});

export const taskListSliceActions = taskListSlice.actions;
export default taskListSlice;
