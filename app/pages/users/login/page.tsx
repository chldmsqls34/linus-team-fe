"use client";
import { API } from "@/redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NextPage } from "next";

const LoginPage : NextPage = () => {
  const [username, setUsername] = useState("");
  const[password,setPassword]=useState("")
  const handleUsername = (e : any)=>{
    setUsername(e.target.value)
  }
  const handlePassword = (e : any)=>{
    setPassword(e.target.value)
  }
  const router = useRouter();
  const handleSubmit = ()=>{
    alert("리퀘스트가 가져가는 아이디 : " + username);
    axios.post(`${API.SERVER}/login`, {username,password}, AxiosConfig()).then(res => {
      const message = res.data.message
      alert((message))
      if(message === 'SUCCESS'){
        router.push('/pages/boards/articles');
      }
    //else if (message === 'WRONG_PASSWORD');
    //     map.put("message", Messenger.WRONG_PASSWORD);
    // }else {
    //     
    // }
    })

  }

  return (
    <>
    <p>아이디 입력</p>
    <input type="text" onChange={handleUsername} />
    <p>비밀번호 입력</p>
    <input type="password" onChange={handlePassword}></input>
    <br />
    <button onClick={handleSubmit}>전송</button>
    </>
  );
}

export default LoginPage
