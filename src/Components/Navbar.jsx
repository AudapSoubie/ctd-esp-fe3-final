import React from 'react'
import { Link } from 'react-router-dom'
{/*import { useGlobalStates } from './Context'*/}

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  {/*const{theme,setTheme} = useGlobalStates()*/}
  const titulos =[
    {titulo:'Home', route: '/'},
    {titulo:'Contact', route: '/contact'},
    {titulo:'Favs', route: '/favs'}
  ]
  {/*const toggleTheme = () => {
    setTheme(!theme); // Cambiar el tema al contrario del tema actual
  };*/}
  return (
    <nav >
      <ul>
      <img src="../../public/images/DH.png" alt="DH" />
      {titulos.map((titulo) => (
        <Link to={titulo.route} key={titulo.titulo}>
        <li>{titulo.titulo}</li>
        </Link>
        ))}
      
      </ul>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button> {/*onClick={toggleTheme}*/} Change theme</button>
    </nav>
  )
}

export default Navbar
    
  
  
   