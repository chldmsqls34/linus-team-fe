'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Button, Input} from '@mui/material'
import { API } from "@/redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";
import MuiDemoRows from "@/app/components/rows/mui-demo-rows";
import MuiDemoColumns from "@/app/components/columns/mui-demo-columns";
import { NextPage } from "next";
import { fetchAllArticles } from "@/redux/features/articles/article.service";
import { useDispatch, useSelector } from "react-redux"
import { getAllArticles } from "@/redux/features/articles/article.slice";
import Columns from "@/app/components/articles/colums";


interface IArticle{
  id: number,
  title: string,
  content: string,
  writer: string,
  registerDate: string,
  array : []
}


const ArticlesPage : NextPage = ({data}:any) => {

    const dispatch = useDispatch()
    
    const allArticles: [] = useSelector(getAllArticles)

    if(allArticles !== undefined){
      console.log('allArticle is not undefined')
      console.log('length is'+ allArticles.length)
      for(let i = 0;i<allArticles.length;i++){
        console.log(JSON.stringify(allArticles[i]))
      }
      
    }else{
      console.log('allArticles is undefined')
    }

    useEffect(()=>{
      dispatch(fetchAllArticles(1))
    }, [dispatch])


  

    // const articleList = article.map((v) => (<Article key={v.id}{...v}/>))

    return (<>
        <h2>게시글 목록</h2>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={Columns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
        <></>
        
    </>)
}

export default ArticlesPage