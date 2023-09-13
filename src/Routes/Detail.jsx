
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useGlobalStates } from '../Components/utils/global.context';
import { ContextGlobal, ContextProvider } from '../Components/utils/global.context'
import { useContext } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {theme,setTheme} = useGlobalStates()
{/*} const{theme,setTheme} = useContext(ContextGlobal);*/}
  const [card, setCard]=useState({})
  const {id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  useEffect(()=>{
    axios ( url)  
    .then(res => setCard(res.data))
    .catch((error) => console.error('Error fetching data:', error));
  },[url])
  if (card === null) {
    return <p>Cargando...</p>;
  }

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
    <div className={theme}>
      <h1>Detail Dentist id {id}</h1>
      <table>
        <tr>
          <th>Name:</th>
          <th>Email:</th>
          <th>Phone:</th>
        </tr>
        <tr>
          <td>{card.name}</td>
          <td>{card.email}</td>
          <td>{card.phone}</td>
        </tr>
      </table>
    </div>
      
    
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail
