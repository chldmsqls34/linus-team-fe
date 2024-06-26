import axios from 'axios';
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './counter.init';


export const counterSlice = createSlice({
  name: "count",
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
export const getCount = (state:any) => state.count.value;
export default counterSlice.reducer;