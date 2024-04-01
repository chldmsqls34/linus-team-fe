'use client'

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import './style.css'
import { PG } from "../redux/common/enums/PG";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "../redux/common/configs/axios-config";
import Header from "./components/layout/header";
export default function Home() {
  
  return(<div className="text-center">
  {/* <div>Welcome</div>

  
  <Link href={`${PG.USER}/join`}>회원가입</Link><br />
  <Link href={`${PG.USER}/login`}>로그인</Link><br />
  <Link href={`${PG.DEMO}/redux-counter`}>REDUX 카운터 데모</Link><br />
  <Link href={`${PG.BOARD}/articles`}>전체 게시글</Link><br />
  <Link href={`${PG.USER}/users`}>전체 회원 목록</Link><br /> */}

  
  


  </div>)
}
