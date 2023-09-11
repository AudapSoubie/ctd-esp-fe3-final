import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ContextGlobal, ContextProvider } from '../Components/utils/global.context'

const Card = ({ dentista }) => {
  const{theme,setTheme} =useContext(ContextGlobal);
 
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
      <img className = "imagen-dentista" src="./images/doctor.jpg" alt="Doctor" />
      <h2>{dentista.name}</h2>
      <h3>{dentista.username}</h3>
      <h4>{dentista.id}</h4>
  {/* En cada card deberan mostrar en name - username y el id */}

  {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
  <Link to={`/dentista/${dentista.id}`}>Detalle</Link>

  {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
  <button onClick = {addFav} className="favButton">⭐</button>
  {theme && setTheme}
   </div>
);
}



  


export default Card;
  
   
    
