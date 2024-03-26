'use client'

import { useRouter } from "next/navigation";

interface IArticle{
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}

const Article = (v: IArticle)=>{
    return(
        <tr key={v.id}>
            <td>{v.title}</td>
            <td>{v.content}</td>
            <td>{v.writer}</td>
            <td>{v.registerDate}</td>
        </tr>
    )
}

export default function Articles(){
    const router = useRouter();
    const article = [
        {id : 0, title : '', content : '', writer : '', registerDate : ''}    
    ]

    const articleList = article.map((v) => (<Article {...v}/>))

    return (<>
        <h2>게시판</h2>
        <table>
            <tr>
        <th>title</th>
        <th>content</th>
        <th>writer</th>
        <th>registerDate</th>
        </tr>
        <thead></thead>
        <tbody>
        {articleList}
        </tbody>
        </table>
    </>)
}