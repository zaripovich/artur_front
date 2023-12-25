import axios from "axios"
import classes from "../../style/books/autorisation_registration.module.scss"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setUser} from "../../store/reducers/userSlice";

let POST_USER_LOG_URL = `http://0.0.0.0:5000/login`;
let GET_USER_URL = `http://0.0.0.0:5000/users/get/username/`;

const Autorisation = ({changeRegModalActive, close}) =>{
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [log, setLog] = useState("")
    function changeUsernameText(e){
        setUsername(e.target.value)
        setLog("")
    }
    function changePasswordText(e){
        setPassword(e.target.value)
        setLog("")
    }

    async function checkInputs(){
        if(username.length === 0){
            setLog("Заполните поле логин")
            return;
        }
        else if(password.length === 0){
            setLog("Заполните поле пароль")
            return;
        }
        function callback(token){
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
        }
        const data = new FormData();
        data.append("username",username)
        data.append("password",password)
        await axios.post(POST_USER_LOG_URL, 
                    data).then(response => callback(response.data.access_token))
        setTimeout(1000)
        await axios.get(GET_USER_URL+username).then(response => dispatch(setUser(response.data.value)))
        setUsername("")
        setPassword("")
        close()

    }

    return(
        <div className={classes.content}>
            <h5>Авторизация</h5>

            <div className={classes.inputs}>
                <p>Введите логин</p>
                <input type="text" value={username} onChange={changeUsernameText}/>
                <p>Введите пароль</p>
                <input type="password" value={password} onChange={changePasswordText}/>
                <h4>{log}</h4>
                <button onClick={()=>checkInputs()}>Войти</button>
            </div>

            <h6>Нет аккаунта? Зарегистрируйтесь</h6>
            <button onClick={()=>changeRegModalActive(true)}>Регистрация</button>
        </div>
    )
}

export {Autorisation}