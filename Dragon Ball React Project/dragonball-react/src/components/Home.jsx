
import axios from "axios"
import { useEffect, useState } from 'react';
import Card from "./Card";
import styles from "./Home.module.css"



export default function Home(){
    
    const [data, setData] = useState([])

    const getData = async ()=>{
      const res = await axios.get( "https://dragon-ball-super-api.herokuapp.com/api/characters")
      setData(res.data)
    }
  
    useEffect(()=>{
      getData()
    }, [])
  
  
    return (
      <div>
        <div className={styles.titulo}>
            <h1>
                Guerreros Z
            </h1>
        </div>
        <div className={styles.cardGrid}>
            <div className={styles.displayCh}>
          {data.map(el=>(
              <Card key={data.id} name={el.name} imagen={el.imageUrl} especie={el.specie}/>
              ))}
              </div>
          </div>
      </div>
    );
  }