"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
const SERVER = "http://localhost:8080";



export default function Login() {
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
    const url = `${SERVER}/api/login`
    const data = { username,password};
    const config = {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: "Bearer blah ~",
      "Access-Control-Allow-Origin": "*",
    }
    
    axios.post(url, data, {headers: config})
    .then(res => {
      const message = res.data.message
      alert((message))
      if(message=='SUCCESS'){
        router.push("/articles/new-article")
      }else if(message=='FAIL'){
        alert("FAIL");
      }else if(message=='WRONG_PASSWORD'){
        alert("WRONG_PASSWORD")
      }else{
        alert("지정되지 않은 값");
      }
    })

  }

  return (
    <div className="text-center">
    <p>아이디 입력</p>
    <input type="text" onChange={handleUsername} />
    <p>비밀번호 입력</p>
    <input type="password" onChange={handlePassword}></input>
    <br />
    <button onClick={handleSubmit}>전송</button>
    </div>
  );
}
