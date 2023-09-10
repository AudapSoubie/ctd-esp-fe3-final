
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
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
    
    <h1>Detail Dentist id {id}</h1>
      <p>Name: {card.name}</p>
      <p>Email: {card.email}</p>
      <p>Phone: {card.phone}</p>
      <p>Website: {card.website}</p>
      
    
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail
