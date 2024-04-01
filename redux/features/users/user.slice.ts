import {createSlice} from '@reduxjs/toolkit'
import { initialState } from './user.init'
import { fetchAllUsersAPI } from './user.api'
import { fetchAllUsers } from './user.service'


const articleThunks = [fetchAllUsersAPI]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handlePending = (state : any) => {
    
}

const handleFulfilled = (state:any,{payload}:any) => {
    console.log('-------------------conclusion-------------------')
    state.array= payload
    console.log(state.array)
  }

const handleRejected = (state : any) => {
    
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending,rejected} = status;

    builder
      .addCase(fetchAllUsers.fulfilled,handleFulfilled)
    }
    }
)

export const getAllUsers = (state:any)=>{
  console.log('-------Before useSelector--------')
  console.log(JSON.stringify(state.article.array.result));
  return state.article.array.result;
}

export const {} = userSlice.actions
export default userSlice.reducer
