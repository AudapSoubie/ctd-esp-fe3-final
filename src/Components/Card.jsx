import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context';
import { useContext } from "react";
import { ContextGlobal, ContextProvider } from '../Components/utils/global.context'

const Card = ({ dentista }) => {
  const {theme,setTheme} = useGlobalStates()
  {/*const{theme,setTheme} =useContext(ContextGlobal);*/}
 
  const addFav = () => {
  const existingFavorites = localStorage.getItem("favoriteCards");
  // Convierte el objeto dentista a una cadena JSON
  const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
  
  // Verifica si el dentista ya está en la lista de favoritos por su ID
  const isAlreadyFavorite = favorites.some((favorite) => favorite.id === dentista.id);

  if (!isAlreadyFavorite) {
    favorites.push(dentista);
    // Almacena la lista de favoritos en el localStorage
    localStorage.setItem('favoriteCards', JSON.stringify(favorites));
    
  } else {
    // Dentista ya está en la lista de favoritos, puedes mostrar un mensaje de error o tomar alguna acción aquí
    console.log(`Dentista con ID ${dentista.id} ya está en la lista de favoritos.`);
  }
}
// Aqui iria la logica para agregar la Card en el localStorage
return (
<div className="card">
      <Link to={`/dentista/${dentista.id}`}>
      <img className = "imagen-dentista" src="./images/doctor.jpg" alt="Doctor" />
      <h4 >{dentista.name}</h4>
      <h4>{dentista.username}</h4>
      <h3>{dentista.id}</h3></Link>
 
  <button onClick = {addFav} className="favButton">⭐</button>
  {theme && setTheme}
   </div>
);
}



  


export default Card;
  
   
    
