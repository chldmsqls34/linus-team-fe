'use client'

import { Button, Icon } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {increment, decrement, getCount} from '@/redux/features/counter/counter.slice'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
const CounterPage:NextPage = () => {

    const count = useSelector(getCount)
    const dispatch = useDispatch()

    // const [count, setCount] = useState(0)
    // const handlePlus = ()=>{
    //     setCount(count+1)
    // }
    // const handleMinus = ()=>{
    //     setCount(count-1)
    // }


    return (<div className="text-center">
    <h1>Redux Counter : {count}</h1>
    
    <AddIcon onClick={()=>dispatch(increment())}/><br />
    <RemoveIcon onClick={()=>dispatch(decrement())}/>

    </div>)
}

export default CounterPage