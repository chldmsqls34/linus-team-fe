//"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

interface ICounter {
  value: number
}

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handlePlus: (state) => {
      state.value += 1;
    },
    handleMinus: (state) => {
      state.value -= 1;
    },

  },
});

export const { handlePlus, handleMinus } = counterSlice.actions
export const getCount = (state: any) => state.count.value;

export default counterSlice.reducer;