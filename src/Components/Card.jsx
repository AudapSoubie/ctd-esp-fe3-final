import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context';
const Card = ({ dentista }) => {
  const {theme,setTheme} = useGlobalStates()
  const addFav = () => {
  const existingFavorites = localStorage.getItem("favoriteCards");
  const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
  const isAlreadyFavorite = favorites.some((favorite) => favorite.id === dentista.id);

  if (!isAlreadyFavorite) {
    favorites.push(dentista);
    localStorage.setItem('favoriteCards', JSON.stringify(favorites));
    alert('Este profesional fue agregado a tu lista de favoritos')
    
  } else {
    console.log(`Dentista con ID ${dentista.id} ya está en la lista de favoritos.`);
    alert(`El dentista  ${dentista.name} ya está en la lista de favoritos.`)
  }
}
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
  
   
    
