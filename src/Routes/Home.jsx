import React, { useState,useEffect } from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'

const Home = () => {
  const {dentista} = useGlobalStates()
  const {theme,setTheme} = useGlobalStates()

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div >
      <ul className ='card-grid'>
             {dentista.map(dentista => (
                <Card dentista={dentista} key ={dentista.id}/>))}
        </ul>
        </div>
    </main>
  )
}
              
             

export default Home



