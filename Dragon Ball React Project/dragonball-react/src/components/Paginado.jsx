import styles from "./Paginado.module.css"

export default function Paginado({paginado,data,charactersPerPage}){
   
        const pageNumbers = []

        for(let i = 1; i <= Math.floor(data/charactersPerPage); i++){
            pageNumbers.push(i)
        }
    
        return(
            <nav>
                <ul className={styles.ul}>
                {pageNumbers &&
                    pageNumbers.map(number=>(
                        <li key={number}>
                            <a className={styles.container}  onClick={()=> paginado(number)}>{number}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            
        )
    }
    
