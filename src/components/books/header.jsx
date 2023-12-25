import { useDispatch, useSelector } from "react-redux"
import classes from "../../style/books/header.module.scss"
import { setAutorised } from "../../store/reducers/userSlice"

const Header = ({changeModalActive}) =>{
    const dispatch = useDispatch()
    const autorised = useSelector(state => state.user.autorised)
    const user = useSelector(state => state.user.user)
    function logOut(){
        localStorage.clear()
        dispatch(setAutorised(false))
    }
    return(
        <header className={classes.container}>
           <div className={classes.content}>
            <div className={classes.name}>
                    BooksReview
                </div>
                {
                    !autorised?
                    <div className={classes.navbar}>
                        {!autorised && <p>Добавлять новые посты могут только авторизованные пользователи</p>}
                        <button onClick={()=>changeModalActive(true)}>Авторизоваться</button>
                    </div>
                    :
                    <div className={classes.navbar}>
                        <p className={classes.username}>{user.username}</p>
                        <button onClick={()=>logOut()}>Выйти</button>
                    </div>
                }
                
           </div>
        </header>
    )
}

export {Header}