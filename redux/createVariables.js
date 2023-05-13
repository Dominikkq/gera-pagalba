import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  sideOne: "",
  sideTwo: "",
  currency: "Ethereum",
  validators: 1,
  endingAt: 4206969,
  category: "",
  UserFullName: "",
  UserEmail: "",
  UserToken: "",
};

export const counterSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    setCreateValues: (state, action) => {
      state.name = action.payload.name;
      state.sideOne = action.payload.sideOne;
      state.sideTwo = action.payload.sideTwo;
    },
    setCurrentUser: (state, action) => {
      state.UserFullName = action.payload.UserName;
      state.UserEmail = action.payload.UserEmail;
      state.UserToken = action.payload.UserToken;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCreateValues, setCurrency, setCurrentUser } =
  counterSlice.actions;

export default counterSlice.reducer;
