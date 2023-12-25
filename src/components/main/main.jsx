import Header from "../header/header"

import classes from "../../style/main/main.module.scss"

import { Link } from "react-router-dom"

export const Main = () =>{

    let links = [
        {
            path: "/team",
            name: "О команде"
        },
        {
            path: "/projects",
            name: "Наши проекты"
        }
    ]

    return(
        <div className={classes.main}>
            <Header links={links}/>
            <div className={classes.info_container}>
                <h1>BooksReview</h1>
                <h2>
                    Веб-сервис, где пользователи делятся своим мнением о прочтенных книгах.
                    Пишите свои рецензии, читайте мысли читателей о ваших любимых произведениях или
                    подберите себе книжку на вечер, исходя из рекомендаций других пользователей сервиса.
                </h2>
                <Link to="/about"><button>Подробнее</button></Link>
                <Link to="/books"><button>Перейти</button></Link>
            </div>
        </div>
    )
}