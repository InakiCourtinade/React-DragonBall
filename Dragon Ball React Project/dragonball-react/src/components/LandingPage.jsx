import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"


export default function LandingPage(){
    return(
        <div className={styles.container}>
            <div className={styles.contImg}>
            <h1 >
                Bienvenidos
            </h1>
            <div >
                <Link to={"/home"}>
                    <button className={styles.boton}>Empezar</button>
                </Link>
            </div>
            </div>
            <img className={styles.imagen} src="https://i.pinimg.com/originals/6e/17/4a/6e174a6b1a6d9e6815436093ea8d98e9.gif" alt="" />
        </div>
    )
}