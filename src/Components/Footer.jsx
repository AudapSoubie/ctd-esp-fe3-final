import React from 'react'
import { ContextGlobal, ContextProvider } from '../Components/utils/global.context'
import { useContext } from "react";
import { useGlobalStates } from '../Components/utils/global.context';

const Footer = () => {
  const {theme,setTheme} = useGlobalStates()
  {/*const{theme,setTheme} = useContext(ContextGlobal);*/}
  return (
    <footer className={theme}>
       
        <p>Powered by</p>
        <img src='../images/DH.png'alt='DH-logo' />
        <img src='../../public/images/ico-facebook.png'alt='facebook' />
        <img src='../../public/images/ico-instagram.png'alt='instagram' />
        <img src='../../public/images/ico-tiktok.png' alt='tiktok' />
        <img src='../../public/images/ico-whatsapp.png' alt='wsp' />
    </footer>
  )
}

export default Footer
