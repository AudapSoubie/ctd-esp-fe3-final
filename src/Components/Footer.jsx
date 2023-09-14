import React from 'react'
import { useGlobalStates } from '../Components/utils/global.context';
import icofacebook  from '../imagenes/icofacebook.png';
import icoinstagram  from '../imagenes/icoinstagram.png';
import icotiktok  from '../imagenes/icotiktok.png';
import whatsapp  from '../imagenes/icowhatsapp.png';


const Footer = () => {
  const {theme,setTheme} = useGlobalStates()
 return (
    <footer className={theme}>
       
        <p>Powered by</p>
        <img  style = {{width: 200, backgroundColor: 'white'}} src='../images/DH.png' alt='DH-logo' />
        <div className='footer-img'>
        <img className='icon'src = {icofacebook} alt='facebook' />
        <img className='icon'src={icoinstagram }alt='instagram' />
        <img className='icon'src={icotiktok}alt='tiktok' />
        <img className='icon'src={whatsapp}alt='wsp' />
        </div>
    </footer>
  )
}
export default Footer
