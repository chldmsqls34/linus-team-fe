"use client";

import {useState} from "react";
import axios from "axios";
import Link from "next/link";
import './globals.css'
import { Button, Input } from "@mui/material";
import { PG } from "./atoms/enums/PG";
import { API } from "./atoms/enums/API";
import AxiosConfig from "./organisms/configs/axios.config";


export default function Home() {
    const [name, setName] = useState("");

    const handleChange = (e: any) => {
        setName(e.target.value);
    };
    
    const handleClick = () => {
        alert("리퀘스트가 가져가는 이름 : " + name);
        axios.post(`${API.SERVER}/name`, {name: name}, AxiosConfig())
        .then(res => {
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
        <Link href={`${PG.USER}/login`}>로그인</Link>
        <br/>
        <Link href={`${PG.USER}/join`}>회원가입</Link>
        <br/>
        <Link href={`${PG.DEMO}/mui-demo`}>MUI데모</Link>
        <br/>
        <Link href={`${PG.DEMO}/counter`}>카운터데모</Link>
        <br/>
        <Link href={`${PG.DEMO}/counter/container`}>리덕스데모</Link>
        <br/>
        <Link href={`${PG.DEMO}/companies`}>company</Link>
        </div>
    );
}
