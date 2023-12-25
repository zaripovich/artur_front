import classes from "../../style/header/header.module.scss"
import { Link } from "react-router-dom";

const Header = ({links}) =>{

    let navlinks = links.map(function(element){
        return <Link to = {element.path} className={classes.link}>{element.name} </Link>
    })

    return(
        <header className={classes.container}>
           <div className={classes.content}>
            <div className={classes.name}>
                    BooksReview
                </div>
                <div className={classes.navbar}>
                    {navlinks}
                </div>
           </div>
        </header>
    )
}

export default Header;