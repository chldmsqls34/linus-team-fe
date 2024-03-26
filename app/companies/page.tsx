'use client'

import { useRouter } from "next/navigation";

interface ICompany{
    company: string,
    contact: string,
    country: string
}

const Company = (v: any)=>{
    return(
        <tr>
            <td>{v.company}</td>
            <td>{v.contact}</td>
            <td>{v.country}</td>
        </tr>
    )
}

export default function Companise(){
    const router = useRouter();
    const company = [
        {Company : "Alfreds Futterkiste", Contact : "Maria Anders", Country : "Germany"},
        {Company : "Centro comercial Moctezuma", Contact : "Francisco Chang", Country : "Mexico"},
        {Company : "Ernst Handel", Contact : "Roland Mendel", Country : "Austria"},
        {Company : "Island Trading", Contact : "Helen Bennett", Country : "UK"},
        {Company : "Laughing Bacchus Winecellars", Contact : "Yoshi Tannamuri", Country : "Canada"},
        {Company : "Magazzini Alimentari Riuniti", Contact : "Giovanni Rovelli", Country : "Italy"}
    ]

    const companyList = company.map((v, i) => (<Company Key={i} {...v}/>))

    return (<>
        <h2>게시판</h2>
        <table>
            <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        </tr>
        <thead></thead>
        <tbody>
        {companyList}
        </tbody>
        </table>
    </>)
}