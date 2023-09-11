import React, { useState,useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from "react";
const Home = () => {
  const{theme,setTheme} = useContext(ContextGlobal);
  const [dentista, setDentista]= useState([])
  const [loading, setLoading] = useState(false)
  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect(()=>{
    setLoading(true);
    axios ( url)
    .then((res) => {
      setDentista(res.data);
    setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  },[])

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div >
      <ul className ='card-grid'>
             {dentista.map(dentista => (
                <Card dentista={dentista} key ={dentista.id}/>))}
        </ul>
        
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}
              
             

export default Home



