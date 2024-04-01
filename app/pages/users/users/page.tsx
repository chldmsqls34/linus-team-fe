'use client'

import { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "@/redux/features/users/user.slice";
import { fetchAllUsers } from "@/redux/features/users/user.service";


interface IUser{
  id: number,
  username: string,
  password: string,
  name: string,
  phone: string,
  address: string,
  job: string,
  height: string,
  weight: string,
}


const UsersPage : NextPage = () => {

    const dispatch = useDispatch()
    
    const allUsers: [] = useSelector(getAllUsers)

    if(allUsers !== undefined){
      console.log('allUseris not undefined')
      console.log('length is'+ allUsers.length)
      for(let i = 0;i<allUsers.length;i++){
        console.log(JSON.stringify(allUsers[i]))
      }
      
    }else{
      console.log('allUser is undefined')
    }

    useEffect(()=>{
      dispatch(fetchAllUsers(1))
    }, [dispatch])



    return (<>
        <h2>유저 목록</h2>
        <table border={1}>
          <thead>
          <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>주소</th>
              <th>직업</th>
          </tr>
          </thead>
          <tbody>
            {allUsers?.map((props:IUser) =>(
              <tr key={props.id}>
                <td>{props.username}</td>
                <td>{props.name}</td>
                <td>{props.address}</td>
                <td>{props.job}</td>
              </tr>))}
          </tbody>
        </table>
        <></>
        
    </>)
}

export default UsersPage