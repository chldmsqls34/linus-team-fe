"use client";
import React from "react";


interface ICompany{
    company : string,
    contact : string,
    country : string
}

const Company = (props:ICompany)=>{
  return (
    <tr>
        <td>{props.company}</td>
        <td>{props.contact}</td>
        <td>{props.country}</td>
    </tr>
  );
}


export default function Companies(){
    const companies = [
        {company:"",contact:"",country:""},
       
    
    ]

    const companyMap = companies.map((v, index) =>
    (<Company key={index}{...v}/>))

    return (<>
        <h2>HTML Table</h2>
        
    <table>
        <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>{companyMap}</tbody>
    </table>
    </>)
}