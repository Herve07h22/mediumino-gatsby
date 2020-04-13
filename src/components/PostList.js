import React, {useState} from "react"
import Post from './Post'

const PostList = ({fromDate, toDate, postList}) => {
    const [limite, setLimite]   = useState(30)
    const trailingZero  = value => value > 9 ? value : `0${value}`
    const today         = new Date()
    const todayFilter   = '' + today.getFullYear() + '-' + trailingZero(today.getMonth()+1) + '-' + trailingZero(today.getDate()+1)
    const toDateFilter  = toDate || todayFilter
    const fromDateFilter= fromDate || '2010-01-01'

    const data = postList.map( ({node})=>node).filter( post => 
        (post.postFirstPublishedAt >= fromDateFilter) && (post.postFirstPublishedAt <= toDateFilter)
    )
    const limitedData = data.slice(0, limite)

    return (
        <>
            {limitedData.map( (post, i) => <Post key={i} index={i} {...post} />)}
            {data.length > limitedData.length && <button className="button" onClick={()=>setLimite(l=>l+20)}>Voir plus d'articles ...</button>}
        </>
    )

}


export default PostList
