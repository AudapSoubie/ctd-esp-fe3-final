import React from "react";
import Card from "../Components/Card";
import { useState,useEffect } from "react";
import { useGlobalStates } from "../Components/utils/global.context";

const Favs = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const {theme,setTheme} = useGlobalStates()
   useEffect(() => {
     const storedCardsJSON = localStorage.getItem("favoriteCards");
 
     if (storedCardsJSON) {
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
      </div>
    </div>
      
    </>
  );
};

export default Favs;
