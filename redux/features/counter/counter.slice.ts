"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./counter.init";

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    
  },
});

export const { increment, decrement } = counterSlice.actions
export const getCount = (state:any) => state.count.value
export default counterSlice.reducer;