
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useGlobalStates } from '../Components/utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {theme,setTheme} = useGlobalStates()
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
    </>
  )
}

export default Detail
