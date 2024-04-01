// 'use client'

// import { decrease, increase } from "@/store/features/counter/counterReducer"
// import { useCallback } from "react"
// import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
// import CounterComponent from "../component/page"

// const CounterContainer = () => {

//     const count = useSelector((state:any) => (state.counterReducer.count))
//     const dispatch = useDispatch()
//     const handlePlus = useCallback(()=> dispatch(increase()),[dispatch])
//     const handleMinus = useCallback(()=> dispatch(decrease()),[dispatch])

//     return (<>
    
//     <CounterComponent count={count} handlePlus={handlePlus} handleMinus={handleMinus}></CounterComponent>

//     </>)
// }
// export default CounterContainer