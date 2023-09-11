import React from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import { useContext } from "react";

const Navbar = () => {
  const { theme, setTheme } = useContext(ContextGlobal);

  const titulos = [
    { titulo: 'Home', route: '/' },
    { titulo: 'Contact', route: '/contact' },
    { titulo: 'Favs', route: '/favs' }
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    
    // Cambiar el tema al contrario del tema actual
  };

  return (
    <nav className={theme}>
      <ul>
        <img className='DH' src="../images/DH.png" alt="DH" />
        {titulos.map((titulo) => (
          <Link to={titulo.route} key={titulo.titulo}>
            <li>{titulo.titulo}</li>
          </Link>
        ))}
      </ul>
      {/* Aquí deberán agregar los links correspondientes a las rutas definidas */}
      {/* Deberán implementar además la lógica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>{theme === 'dark' ? '🌙' : '☀️'}</button>
    </nav>
  );
};

export default Navbar;
