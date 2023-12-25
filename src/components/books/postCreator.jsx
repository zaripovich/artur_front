
import Modal from "./modal"
import { useState } from "react"

import classes from "../../style/books/postCreator.module.scss"
import axios from "axios"
import { useSelector } from "react-redux";

let POST_POST_URL = `http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT_BACK}/posts/add`;


const PostCreator = ({close}) =>{
    const user_id = useSelector(state => state.user.user.user_id)
    const[log, setLog] = useState("")
    const[themeTxt, setThemeTxt] = useState("")
    const[bookTxt, setBookTxt] = useState("")
    const[autorTxt, setAutorTxt] = useState("")
    const[postTxt, setPostTxt] = useState("")
    function themeChange(e){
        setThemeTxt(e.target.value)
        setLog("")
    }
    function bookChange(e){
        setBookTxt(e.target.value)
        setLog("")
    }
    function autorChange(e){
        setAutorTxt(e.target.value)
        setLog("")
    }
    function postChange(e){
        setPostTxt(e.target.value)
        setLog("")
    }

    async function checkInputs(){
        if(themeTxt.length < 1){
            setLog("Укажите тему")
            return
        }
        else if(bookTxt.length < 1){
            setLog("Укажите книгу")
            return
        }
        else if (autorTxt.length < 1){
            setLog("Укажите автора")
            return
        }
        else if(postTxt.length < 50){
            setLog("Слишком короткий текст поста")
            return
        }
        
        const data = {
            user_id: user_id,
            book_name: bookTxt,
            book_author: autorTxt,
            text: postTxt,
            title: themeTxt
        }
        await axios.post(POST_POST_URL, data,{
            headers:{
                'Content-Type': 'application/json',
            }
        })

        setAutorTxt("")
        setBookTxt("")
        setPostTxt("")
        setThemeTxt("")

        close()
    }


    return(
        <div className={classes.content}>
            <h2>Новый пост</h2>
            <div className={classes.head}>
                <input value={themeTxt} onChange={themeChange} type="text" placeholder="Тема" />
                <input value={bookTxt} onChange={bookChange} type="text" placeholder="Книга"/>
                <input value={autorTxt} onChange={autorChange} type="text" placeholder="Автор книги"/>
            </div>
            <textarea value={postTxt} onChange={postChange} type="text" placeholder="Текст поста" />
            <p>{log}</p>
            <button onClick={() => checkInputs()}>Опубликовать</button>
        </div>
    )
}

export default PostCreator;