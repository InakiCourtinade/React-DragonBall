import styles from "./Card.module.css"

export default function Card({ name, imagen, especie}){
    return(
    <div className={styles.container}>
        <div className={styles.forma}>
        <h3>Nombre: {name}</h3>
        <p>Especie : {especie}</p>
        <img src={imagen} className={styles.img}/>
        </div>
    </div>
    )}