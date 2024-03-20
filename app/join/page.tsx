"use client";
import axios from "axios";
import { useState } from "react";
const SERVER = "http://localhost:8080";


export default function Join() {
  const [username, setUsername] = useState("");
  const[password,setPassword]=useState("")
  const handleUsername = (e : any)=>{
    setUsername(e.target.value)
  }
  const handlePassword = (e : any)=>{
    setPassword(e.target.value)
  }
  const handleSubmit = ()=>{
    alert("리퀘스트가 가져가는 아이디 : " + username);
    alert("리퀘스트가 가져가는 비밀번호 :"+password)
    const url = `${SERVER}/login`
    const data = { username: username,password:password };
    const config = {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: "Bearer blah ~",
      "Access-Control-Allow-Origin": "*",
    }

    axios.post(url, data, {headers: config}).then(res => {
      alert("리스판스가 가져온 이름: " + JSON.stringify(res.data.username))
      alert("리스판스가 가져온 비밀번호:"+JSON.stringify(res.data.password))
    })

  }

  return (
    <>
    <p>아이디 입력</p>
    <input type="email" onChange={handleUsername} />
    <p>비밀번호 입력</p>
    <input type="password" onChange={handlePassword}></input>
    <br />
    <button onClick={handleSubmit}>전송</button>
    </>
  );
}
