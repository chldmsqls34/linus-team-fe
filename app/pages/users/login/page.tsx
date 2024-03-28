"use client";
import { API } from "@/app/atoms/enums/API";
import AxiosConfig from "@/app/organisms/configs/axios.config";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";




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
    
    axios.post(`${API.SERVER}/api/login`, {username,password}, AxiosConfig())
    .then(res => {
      const message = res.data.message
      alert((message))
      if(message=='SUCCESS'){
        router.push("./demos/mui-demo")
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
