import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"

export default function Blogs({hendelAddToBookmarks,hendelMarkAsRead}){
    const [Blogs, setBlogs]=useState([])
    useEffect(  ()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return(
        <div className="md:w-2/3">
            <h1>Blogs:{Blogs.length}</h1>
            {
                Blogs.map(blog=><Blog
                    key={blog.id}
                    blog={blog}
                    hendelAddToBookmarks={hendelAddToBookmarks}
                    hendelMarkAsRead={hendelMarkAsRead}
                ></Blog>)
            }
        </div>
    )
}