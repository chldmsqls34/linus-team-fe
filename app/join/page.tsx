"use client";
import axios from "axios";
import { useReducer, useState } from "react";
import { useRouter } from "next/navigation";
const SERVER = "http://localhost:8080";
import './style.css';
import { text } from "stream/consumers";



export default function Join() {

  const [inputs,setInputs] = useState({
    username :"",
    password :"",
    repeatPassword : "",
    name : "",
    phone : "",
    address : "",
    job : "",
    height : "",
    weight : ''
  })

  const{username,password,repeatPassword,name,phone,address,job,height,weight} = inputs;
  
  const handleChange = (e:any)=> {
    const{name,value}= e.target;
    setInputs({
      ...inputs,
      [name]: value,
      });
  }
  const router = useRouter();

  const handleSubmit =(e:any)=> {
    e.preventDefault()
    alert("리퀘스트가 가져가는 아이디 : " + username);
    alert("리퀘스트가 가져가는 비밀번호 :"+password)
    const url = `${SERVER}/api/users`
    const data = { username,password,repeatPassword,name,phone,address,job,height,weight};
    const config = {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: "Bearer blah ~",
      "Access-Control-Allow-Origin": "*",
    }

    axios.post(url, data, {headers: config}).then(res => {
      alert("리스판스가 가져온 정보: " + JSON.stringify(res.data))
      router.push("/login")
    })
  }
  



  return (
    <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>
    <label htmlFor="username"><b>ID</b></label>
    <input type="text" placeholder="Enter ID" name="username" value={username} onChange={handleChange} required />
    <hr/>
    <label htmlFor="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={handleChange} required/>
    <hr/>
    <label htmlFor="repeatPassword"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="repeatPassword" onChange={handleChange} required/>
    <hr/>
    <label htmlFor="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" value={name} onChange={handleChange} required/>
    <hr/>
    <label htmlFor="phone"><b>Phone-number</b></label>
    <input type="text" placeholder="Enter Phone-number" name="phone" value={phone} onChange={handleChange} required/>
    <hr/>
    <label htmlFor="address"><b>Address</b></label>
    <input type="text" placeholder="Enter Address" name="address" value={address} onChange={handleChange} required/>
    <hr/>
    <label htmlFor="job"><b>Job</b></label>
    <input type="text" placeholder="Enter Job" name="job" value={job} onChange={handleChange} required/>
    <hr/>
    <label htmlFor="height"><b>Height</b></label>
    <input type="text" placeholder="Enter Height" name="height" value={height} onChange={handleChange} required/>
    <hr/>
    <label htmlFor="weight"><b>Weight</b></label>
    <input type="text" placeholder="Enter Weight" name="weight" value={weight} onChange={handleChange} required/>
    <hr/>
    <label>
      <input type="checkbox" name="remember" value={username} style={{marginBottom:"15px"}}/> Remember me
    </label>
    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>
    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
    </div>
  </div>
  )
}

