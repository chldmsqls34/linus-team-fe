"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import MuiDemoColumns from "@/app/organisms/columns/mui-demo-columns";
import MuiDemoRows from "@/app/organisms/rows/mui-demo-rows";
const SERVER = "http://localhost:8080";

interface IArticle{
    id : number,
    title : string,
    content : string,
    writer : string,
    registerdate : string
}

export default function Articles(){
    const[articles,setArticles]=useState<IArticle[]>([]);

    const url = `${SERVER}/api/articles`
    const config = {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: "Bearer blah ~",
        "Access-Control-Allow-Origin": "*",
    }
    useEffect( () => {
      
      axios.get(url,{headers: config})
        .then(res => {
          const message = res.data.message
          console.log((message))
          if(message=='SUCCESS'){
            console.log("게시글이 있습니다")
          const arr = res.data.result
          for(const element of arr){
            console.log(element)
          }
          setArticles(arr)
          
          }else if(message=='FAIL'){
            console.log("게시글이 없습니다");
          }else{
            console.log("지정되지 않은 값");
          }
        })
      },[]);
  

    return (
    <div>
        <h2>게시글 목록</h2>
        <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={MuiDemoRows()}
      columns={MuiDemoColumns()}
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
      </div>)
}

   
