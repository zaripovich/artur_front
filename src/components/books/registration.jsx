import { useState } from "react"
import classes from "../../style/books/autorisation_registration.module.scss"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/reducers/userSlice";

let POST_USER_REG_URL = `http://0.0.0.0:5000/reg`;
let POST_USER_LOG_URL = `http://0.0.0.0:5000/login`;
let GET_USER_URL = `http://0.0.0.0:5000/users/get/username/`;

const Registration = ({changeAutoModalActive, close}) =>{
    const dispatch = useDispatch()
    const access_token = useSelector(state => state.user.access_token)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [log, setLog] = useState("")
    function changeUsernameText(e){
        setUsername(e.target.value)
        setLog("")
    }
    function changePasswordText(e){
        setPassword(e.target.value)
        setLog("")
    }
    function changeRepeatPasswordText(e){
        setRepeatPassword(e.target.value)
        setLog("")
    }

    async function checkInputs(){
        if(username.length < 5){
            setLog("Логин слишком короткий!")
            return;
        }
        else if(password.length < 5){
            setLog("Пароль слишком короткий!")
            return;
        }
        else if(password !== repeatPassword){
            setLog("Пароли не совпадают!")
            return;
        }
        function callback(token){
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
        }
        const log_data = new FormData();
        log_data.append("username",username)
        log_data.append("password",password)
        await axios.post(POST_USER_REG_URL, {
            username: username,
            password: password
        }).then(async ()=> await axios.post(POST_USER_LOG_URL, 
            log_data).then(response => callback(response.data.access_token)))
        setTimeout(1000)
        await axios.get(GET_USER_URL+localStorage.getItem('username')).then(response => dispatch(setUser(response.data.value)))
        close()
    }

    return(
        <div className={classes.content}>
            <h5>Регистрация</h5>

            <div className={classes.inputs}>
                <p>Придумайте логин</p>
                <input type="text" value={username} onChange={changeUsernameText}/>
                <p>Придумайте пароль</p>
                <input type="password" value={password} onChange={changePasswordText}/>
                <p>Повторите пароль</p>
                <input type="password" value={repeatPassword} onChange={changeRepeatPasswordText}/>
                <h4>{log}</h4>
                <button onClick={()=>checkInputs()}>Регистрация</button>
            </div>

            <h6>Уже есть аккаут? Авторизуйтесь</h6>
            <button onClick={()=>changeAutoModalActive(true)}>Авторизация</button>
        </div>
    )
}

export {Registration}