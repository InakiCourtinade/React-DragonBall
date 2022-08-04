import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


export default function Details(){

    const {name} = useParams()
    const[personaje, setPersonaje] = useState([])


    const getData = async ()=>{
        const res = await axios.get( `https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`)
        setPersonaje(res.data)
        console.log(res.data)
}
    useEffect(()=>{
        getData()
        })

    return(
        <div>
            <h1> {personaje.name}</h1>
            <p>Planeta de Origen: {personaje.originplanet}</p>
            <p>Especie: {personaje.specie}</p>
            <p>Rol: {personaje.role}</p>
            <p>Universo: {personaje.universe}</p>
            <img src={personaje.imageUrl} alt="" />


        </div>
    )
}