import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAllUsersAPI } from "./user.api"



export const fetchAllUsers : any = createAsyncThunk(
    `articles/fetchAllArticles`,
    async(page: number) => {
        console.log('page:'+page)
        const data:any = await fetchAllUsersAPI(1)
        const {message, result}:any = data
        console.log('------API 를 사용한 경우 ------')
        console.log('message' + message)
        console.log(JSON.stringify(result))
    
        return data
    }
)
