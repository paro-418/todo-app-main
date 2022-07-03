import { createSlice } from "@reduxjs/toolkit";

const initialState = { todoTask: [] };

const taskListSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      state.todoTask.push(action.payload);
    },
    removeTask(state, action) {
      state.todoTask = state.todoTask.filter(
        (obj) => obj.id + "IMG" !== action.payload
      );
    },
    markTask(state, action) {
      for (let i = 0; i < state.todoTask.length; i++) {
        if (state.todoTask[i].id === action.payload) {
          state.todoTask[i].completed = !state.todoTask[i].completed;
          break;
        }
      }
    },
    deleteTask(state) {
      state.todoTask = state.todoTask.filter((obj) => obj.completed === false);
    },
  },
});

export const taskListSliceActions = taskListSlice.actions;
export default taskListSlice;
