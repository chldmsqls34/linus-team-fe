import { createAsyncThunk } from "@reduxjs/toolkit"
import { IArticle } from "./article.model"
import { getAllArticlesAPI } from "./article.api"
import axios from "axios"
import { API } from "@/redux/common/enums/API"
import AxiosConfig, { instance } from "@/redux/common/configs/axios-config"

export const getArticles: any = createAsyncThunk('articles/getAllArticles',
    async(page: number) => {
        const data:any = await getAllArticlesAPI(page)
        const {message, result}:any = data
        // console.log('------API 를 사용한 경우 ------')
        // console.log('message' + message)
        // console.log(JSON.stringify(result))
        
        return data

    //     try {
    //         instance(`/all-articles`, AxiosConfig())
    // .then(res =>{
        // const {message, result} = res.data
    //     const message = res.data.message
    //   console.log((message))
    //   if(message === 'SUCCESS'){
    //     console.log("게시글이 있습니다")
    //     //setArticles(res.data.result)
    //     const arr = res.data.result
    //     for(let i of arr){console.log(i)}//테스트 코드
    //   }else if(message === 'FAIL'){
    //     console.log("게시글이 없습니다")
    //   }else console.log("지정되지 않은 값")
    //   return res.data
    //  })
    //     } catch (error) {
    //         console.log('getArticles Error : '+error)
    //         return rejectWithValue(error)
    //      }
    }
)