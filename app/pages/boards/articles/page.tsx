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
import { getArticles } from "@/redux/features/articles/article.service";
import { useDispatch } from "react-redux"

// const Article = (v: IArticle)=>
//     (
        // <tr key={v.id}>
        //     <td>{v.title}</td>
        //     <td>{v.content}</td>
        //     <td>{v.writer}</td>
        //     <td>{v.registerDate}</td>
        // </tr>
//     )


const ArticlesPage : NextPage = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    const [articles, setArticles] = useState([])

useEffect(()=>{
  dispatch(getArticles())
}, [])


    const article = [
        {id : 1, title : '', content : '', writer : '', registerDate : ''}    
    ]

    // const articleList = article.map((v) => (<Article key={v.id}{...v}/>))

    return (<>
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
    </>)
}

export default ArticlesPage