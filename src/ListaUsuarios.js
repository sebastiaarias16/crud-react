import React, { useEffect, useState } from  'react'
import axios from 'axios'
import UsuarioIndividual from './UsuarioIndividual'

function ListaUsuarios(){

    const[datausuarios, setdatausuario] = useState([])

    useEffect(()=>{
        axios.get('api/usuario/obtenerusuarios').then(res =>{
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }, [])

    //mapear lista de ususarios

    const listausuarios = datausuarios.map(usuario =>{
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Lista de usuarios</h2>
            {listausuarios}
        </div>
    )
}



export default ListaUsuarios