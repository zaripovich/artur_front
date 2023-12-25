import { Link } from "react-router-dom"

import classes from "../../style/team/team.module.scss"
import art from "../../images/art.jpg"
import al from "../../images/al.jpg"
import din from "../../images/din.jpg"
import vk_icon from "../../images/vk-icon.png"

const Teammate = ({avatar, name, role, vk}) =>{
    return(
        <div className={classes.teammate_container}>
            <img src={avatar} alt="" />
            <h4>{name}</h4>
            <p>{role}</p>
            <a href={vk} target="_blank"><img src={vk_icon} alt="" /></a>
        </div>
    )
}

export const Team = () =>{
    return(
        <div className={classes.container}>
            <h1>Наша команда</h1>
            <h2>Команда состоит из трех человек. Каждый занимается своей частью работы</h2>

            <div className={classes.teammates}>
                <Teammate avatar={art} 
                          name="Артур Ягудин" 
                          role="fullstack" 
                          vk="https://vk.com/yagudin_artur"/>
                <Teammate avatar={al} 
                          name="Алина Ханмурзина" 
                          role="frontend" 
                          vk="https://vk.com/alien.khan"/>
                <Teammate avatar={din} 
                          name="Динар Нугуманов" 
                          role="backend"
                          vk="https://vk.com/bavedro"/>
            </div>
            <div className={classes.btns}>
                <Link to="/"><button>Главная</button></Link>
                <Link to="/projects"><button>Наши проекты</button></Link>
            </div>
        </div>
    )
}