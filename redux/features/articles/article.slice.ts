import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { getArticles } from "./article.service";
import { getAllArticlesAPI } from "./article.api";

const articleThunks = [getArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handlePending = (state : any) => {
    
}

const handleFulfilled = (state:any,{payload}:any) => {
    console.log('-------------------conclusion-------------------')
    console.log(JSON.stringify(payload))
  }

const handleRejected = (state : any) => {
    
}

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending,rejected} = status;

    builder
      .addCase(getArticles.fulfilled,handleFulfilled)
    }
    }
)

export const {} = articleSlice.actions
export default articleSlice.reducer