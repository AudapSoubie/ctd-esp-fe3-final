import React from "react";
import Card from "../Components/Card";
import { useState,useEffect } from "react";
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const{theme, setTheme} = useContext(ContextGlobal);
   // Estado para almacenar las Cards favoritas
  
   useEffect(() => {
     // Recupera los datos del localStorage
     const storedCardsJSON = localStorage.getItem("favoriteCards");
 
     if (storedCardsJSON) {
       // Convierte los datos recuperados de JSON a un arreglo
       const storedCards = JSON.parse(storedCardsJSON);
       setFavoriteCards(storedCards);
     }
   }, []);
   

  return (
    
    <>
    <div className={theme}>
    <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favoriteCards.map((dentista) => (
          <Card key={dentista.id} dentista={dentista}  />
        ))}
       {/*} {localStorage.clear()}*/}
         {theme && setTheme}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
      
    </>
  );
};

export default Favs;
