import React, {useState} from "react"
import Post from './Post'

const PostList = ({postList}) => {
    const [limite, setLimite]   = useState(30)
    
    const data          = postList.map( ({node})=>node)
    const limitedData   = data.slice(0, limite)

    return (
        <>
            {limitedData.map( (post, i) => <Post key={i} index={i} {...post} />)}
            {data.length > limitedData.length && <button className="button" onClick={()=>setLimite(l=>l+20)}>Voir plus d'articles ...</button>}
        </>
    )

}


export default PostList
