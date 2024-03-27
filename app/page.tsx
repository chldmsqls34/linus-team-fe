"use client";

import {useState} from "react";
import axios from "axios";
import Link from "next/link";
import './globals.css'
import { Button, Input } from "@mui/material";

const SERVER = "http://localhost:8080";

export default function Home() {
    const [name, setName] = useState("");
    const handleChange = (e: any) => {
        setName(e.target.value);
    };
    const handleClick = () => {
        alert("리퀘스트가 가져가는 이름 : " + name);
        const url = `${SERVER}/name`;
        const data = {name: name};
        const config = {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: "Bearer blah ~",
            "Access-Control-Allow-Origin": "*",
        }

        axios.post(url, data, {headers: config}).then(res => {
            alert("리스판스가 가져온 이름: " + JSON.stringify(res.data))
        })
    }

    return (
        <div className="text-center">
        <p>Welcome To React World!</p>
        <br/>
        <h3 className="text-red-700">이름입력 :</h3>
        <Input type="text" onChange={handleChange}/>
        <br/>
        <Button onClick={handleClick}>전송</Button>
        <br/>
        <Link href={"/login"}>로그인</Link>
        <br/>
        <Link href={"/join"}>회원가입</Link>
        <br/>
        <Link href={"/mui-demo"}>MUI데모</Link>
        </div>
    );
}
