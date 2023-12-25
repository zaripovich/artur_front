
import { useDispatch, useSelector } from "react-redux"
import classes from "../../style/books/posts.module.scss"
import { useEffect } from "react"
import axios from "axios"
import { setPosts } from "../../store/reducers/postReducer"

let GET_POSTS_URL = `http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT_BACK}/posts/get/all`;

const Post = ({post}) =>{
    return(
        <div className={classes.post}>
            <h1>{post.title}</h1>
            <div className={classes.book}>
                <h2>Название:&nbsp;{post.book_name}</h2>
                <h2>Автор:&nbsp;{post.book_author}</h2>
            </div>
            <div className={classes.txt}>
                <p>{post.text}</p>
            </div>
        </div>
    )
}


const Posts = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        const interval = setInterval(async() => {
            await axios.get(GET_POSTS_URL).then(response =>{
                dispatch(setPosts(response.data.value))
            })
          }, 1000);
          return () => clearInterval(interval);
    })

    const posts = useSelector(state => state.posts.posts)

    let postsTag = posts.map((element) => {
        return <Post post = {element} />
    })
    
    return(
        <div className={classes.posts}>
            {postsTag}
        </div>
    )
}

export {Posts}