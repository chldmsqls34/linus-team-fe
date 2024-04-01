"use client";
import { Icon } from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import {useSelector,useDispatch} from 'react-redux'
import { getCount, handleMinus, handlePlus } from "@/redux/features/counter/counter.slice";



export default function ReduxCounter(){
    const count = useSelector(getCount)
    const dispatch = useDispatch()

    return(<div className="text-center mt-500" style={{marginTop:'100px'}}>
    <h1> Redux Counter : {count}</h1>
    <Icon baseClassName="fas" className="fa-plus-circle" sx={{ fontSize: 30 }} />
    <AddCircleOutlineRoundedIcon onClick={()=>dispatch(handlePlus())}/>
    <RemoveCircleOutlineRoundedIcon onClick={()=>dispatch(handleMinus())}/>
    </div>
    )
}