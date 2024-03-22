"use client";

import {useState} from "react";
import axios from "axios";
import Link from "next/link";

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
        <>
            <div>Welcome To React World!</div>
            <h3>이름입력 :</h3>
            <input type="text" onChange={handleChange}/>
            <br/>
            <button onClick={handleClick}>전송</button>
            <br/>
            <Link href={"/login"}>로그인</Link>
            <br/>
            <Link href={"/join"}>회원가입</Link>
        </>
    );
}
