import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalStates } from './utils/global.context';


const Navbar = () => {
  const {theme,setTheme} = useGlobalStates()
  const titulos = [
    { titulo: 'Home', route: '/' },
    { titulo: 'Contact', route: '/contact' },
    { titulo: 'Favs', route: '/favs' }
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    
    
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
      <button onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
    </nav>
  );
};

export default Navbar;
