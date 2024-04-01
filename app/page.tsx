'use client'

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import './style.css'
import { PG } from "../redux/common/enums/PG";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "../redux/common/configs/axios-config";
export default function Home() {
  const [name, setName] = useState('')
  const handleChange = (e:any)=>{
    setName(e.target.value)
  }
  const handleClick = ()=>{
    alert('리퀘스트가 가져가는 이름 : '+name)
    axios.post(`${API.SERVER}/name`, {'name': name}, AxiosConfig())
    .then((res)=>{
      alert("리스폰스가 가져온 이름 : "+JSON.stringify(res.data))
    }
    )
  }
  return<div className="text-center">
  <div>Welcome</div>
  <h3>이름을 입력하세요</h3>
  <input type="text" onChange={handleChange} /><br />
  <button onClick={handleClick}>전송</button><br />
  <Link href={`${PG.USER}/login`}>로그인</Link><br />
  <Link href={`${PG.USER}/join`}>회원가입</Link><br />
  <Link href={`${PG.DEMO}/mui-demo`}>MUI 데모</Link><br />
  <Link href={`${PG.DEMO}/counter`}>카운터 데모</Link><br />
  <Link href={`${PG.DEMO}/redux-counter`}>REDUX 카운터 데모</Link><br />
  <Link href={`${PG.BOARD}/articles`}>전체 게시글</Link><br />


  </div>
}
