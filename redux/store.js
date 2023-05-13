import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import counterReducer from "./counterSlice";
import createReducer from "./createVariables";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    create: createReducer,
  },
});
