"use client";
import axios from "axios";
import { useState } from "react";
const SERVER = "http://localhost:8080";


export default function Join() {
  const [username, setUsername] = useState("");
  const[password,setPassword]=useState("")
  const[name,setName]=useState("");
  const handleUsername = (e : any)=>{
    setUsername(e.target.value)
  }
  const handlePassword = (e : any)=>{
    setPassword(e.target.value)
  }
  const handleName = (e : any)=>{
    setName(e.target.value)
  }
  
  const handleSubmit = ()=>{
    
    


  }

  return (
    <>
    <p>아이디 입력</p>
    <input type="email" value={username} placeholder="aaa@aa.com" onChange={handleUsername} />
    <p>비밀번호 입력</p>
    <input type="password" value={password} onChange={handlePassword}></input>
    <br />
    <input type="text" value={name} onChange={handleName}></input>
    <button onClick={handleSubmit}>전송</button>
    </>
  );
}