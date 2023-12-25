
import classes from "../../style/books/books.module.scss"
import { Header } from "./header";
import { Posts } from "./posts";
import PostCreator from "./postCreator";
import Modal from "./modal";
import { useEffect, useState } from "react";
import { Autorisation } from "./autorisation";
import { Registration } from "./registration";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../../store/reducers/userSlice";

let GET_USER_URL = `http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT_BACK}/users/get/username/`;

const Books = () =>{
    const dispatch = useDispatch()
    const [autoModalActive, setAutoModalActive] = useState(false)
    const [regModalActive, setRegModalActive] = useState(false)
    const [postCreatorActive, setPostCreatorActive] = useState(false)
    function changeAutoModalActive(state){
        setAutoModalActive(state)
        setRegModalActive(false)
    }
    function changeRegModalActive(state){
        setRegModalActive(state)
        setAutoModalActive(false)
    }

    function closeAuth(){
        setAutoModalActive(false)
    }
    function closeReg(){
        setRegModalActive(false)
    }

    async function authorize(){
        console.log(localStorage)
        if(localStorage.getItem('token')){
            axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
            await axios.get(GET_USER_URL+localStorage.getItem('username')).then(response => dispatch(setUser(response.data.value)))
        }
        else return () => {}
    }

    useEffect(()=>{
        authorize()
    })

    const autorised = useSelector(state => state.user.autorised)



    return(
        <div className={classes.books}>
            <Modal active={autoModalActive} setActive={setAutoModalActive}>
                <Autorisation changeRegModalActive={changeRegModalActive} close={closeAuth}/>
            </Modal>
            <Modal active={regModalActive} setActive={setRegModalActive}>
                <Registration changeAutoModalActive={changeAutoModalActive} close={closeReg}/>
            </Modal>
            <Modal active={postCreatorActive} setActive={setPostCreatorActive}>
                <PostCreator close={() => setPostCreatorActive(false)}/>
            </Modal>
            
            <Header changeModalActive={changeAutoModalActive}/>
            <div className={classes.content}>
                <div className={classes.lenta}>
                    <p>Лента</p>
                    <button disabled={!autorised} onClick={()=>setPostCreatorActive(true)}>Добавить новый пост</button>
                </div>
                <Posts/>
            </div>
        </div>
    )
}

export {Books};