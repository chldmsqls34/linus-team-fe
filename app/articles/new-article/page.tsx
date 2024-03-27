"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
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
        <h2>HTML Table</h2>

        <table>
            <thead>
            <tr>
                <th>제목</th>
                <th>내용</th>
                <th>작성자</th>
                <th>등록일</th>
            </tr>
        </thead>
        <tbody>{articles.map((props:IArticle) =>
          <tr key={props.id}>
          <td>{props.title}</td>
          <td>{props.content}</td>
          <td>{props.writer}</td>
          <td>{props.registerdate}</td>
        </tr>)}
        </tbody>
        </table>
      </div>)
}

   
