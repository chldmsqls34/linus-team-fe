"use client";
import axios from "axios";
import { useState } from "react";
const SERVER = "http://localhost:8080/api";


export default function Login() {
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
    const data = { username,password};
    const config = {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: "Bearer blah ~",
      "Access-Control-Allow-Origin": "*",
    }

    axios.post(url, data, {headers: config}).then(res => {
      const message = res.data.message
      alert((message))

    //   if(message == FAIL){
    //     
    // }else if (!optUser.getPassword().equals(paramMap.get("password"))){
    //     System.out.println(Messenger.WRONG_PASSWORD);
    //     map.put("message", Messenger.WRONG_PASSWORD);
    // }else {
    //     System.out.println(Messenger.SUCCESS);
    //     map.put("message", Messenger.SUCCESS);
    //     System.out.println("ID is "+ optUser.getId());
    //     System.out.println("PW is "+ optUser.getPassword());
    //     System.out.println("User is "+null);
    // }
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
