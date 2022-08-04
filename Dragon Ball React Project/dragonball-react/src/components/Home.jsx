
import axios from "axios"
import { useEffect, useState } from 'react';
import Card from "./Card";
import styles from "./Home.module.css"
import { Link } from "react-router-dom";
import Paginado from "./Paginado";



export default function Home(){
    
    const [data, setData] = useState([]);
    const [personajes, setPersonajes] = useState([])
    const [buscador, setBusqueda] =useState("")
    const [currentPage, setCurrentPage] = useState(1); //indica el numero de pagina
    const [charactersPerPage, setCountriesPerPage] = useState(8); //indica el numero de paises que muestro por pagina
    const indexOfLastCharacter = currentPage * charactersPerPage //Hasta q pais mostrar 
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage // desde que pais mostrar
    const currentCharacters = data.slice(indexOfFirstCharacter, indexOfLastCharacter) //paises q se muestran en la pagina

    const paginado = (pageNumber)=>{
      setCurrentPage(pageNumber)
  }

    const getData = async ()=>{
      const res = await axios.get( "https://dragon-ball-super-api.herokuapp.com/api/characters")
      setData(res.data)
      setPersonajes(res.data)
    }
  
    useEffect(()=>{
      getData()
    }, [])
    
    const handleChange = e =>{
      console.log(e.target.value)
      setBusqueda(e.target.value)
      filtrar(e.target.value)
    }
    const filtrar =(filtrados)=>{
      var personaje = personajes.filter((el) =>{
        if(el.name.toString().toLowerCase().includes(filtrados.toLowerCase())){
          return el
        }
      })
      setData(personaje)
    }
  
    return (
      <div className={styles.componente}>
        <div className={styles.titulo}>
            <h1 className={styles.h1}>
              Universo DragonBall
            </h1>
        </div>
        <div className={styles.busqYpag}>
        <div className={styles.busqueda}>
          <input className={styles.inputB} type="text" value={buscador} placeholder="Buscar guerrero..." onChange={handleChange} />
          <button className={styles.boton} type="sumbit">Buscar</button>
        </div>
        <Paginado charactersPerPage={charactersPerPage}
        data={data.length}
        paginado={paginado}
        />
        </div>
        <div className={styles.cardGrid}>
          
          <div className={styles.displayCh}>
          {currentCharacters.map((el)=>(
              <Link className={styles.link} to={`/characterDetail/${el.name}` }>
              <Card key={data.id} name={el.name} imagen={el.imageUrl} especie={el.specie}/>
              </Link>
              ))}
              </div>
          </div>
      </div>
    );
  }