'use client'

import React from "react"
import { Button } from "@mui/material";


interface ICounter{
    count: number,
    handlePlus: ()=>0,
    handleMinus: ()=>0
}

const CounterComponent = React.memo(({count, handlePlus, handleMinus}: ICounter) => {
    return (
    <div>
    <h1>Counter : {count}</h1>
    <Button onClick={handlePlus}>+</Button><br />
    <Button onClick={handleMinus}>-</Button>

    </div>)
})

export default CounterComponent